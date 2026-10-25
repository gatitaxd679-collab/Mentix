/**
 * 🔥 TE RETO - Módulo de Integración con Supabase
 * Conexión en la nube para sincronización en tiempo real entre múltiples dispositivos en internet.
 */

class SupabaseService {
  constructor() {
    this.url = 'https://ihtsinxgimbsaljpzxcl.supabase.co';
    this.anonKey = localStorage.getItem('supabase_anon_key') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodHNpbnhnaW1ic2FsalB6eGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1MjM3MDUsImV4cCI6MjEwNjA5OTcwNX0.Y9pgB4c3y2t0KPeZVdAqrGBbsnPMDabQCl1KUaUpLF4';
    this.client = null;
    this.isConnected = false;
    this.activeRealtimeChannel = null;

    this.initClient();
  }

  initClient() {
    if (window.supabase && this.url && this.anonKey) {
      try {
        this.client = window.supabase.createClient(this.url, this.anonKey);
        this.testConnection();
      } catch (e) {
        console.error('Error al inicializar cliente de Supabase:', e);
      }
    }
  }

  setAnonKey(key) {
    this.anonKey = key.trim();
    localStorage.setItem('supabase_anon_key', this.anonKey);
    this.initClient();
  }

  async testConnection() {
    if (!this.client) {
      this.isConnected = false;
      this.updateStatusBadge();
      return false;
    }

    try {
      // 1. Probar conectividad con el servicio Auth
      const { error: authError } = await this.client.auth.getSession();
      if (!authError) {
        this.isConnected = true;
        console.log('⚡ Conexión a Supabase Cloud verificada con éxito:', this.url);
      } else {
        console.warn('Respuesta auth Supabase:', authError.message);
      }

      // 2. Intentar consultar retos si existen
      const { data, error: tableError } = await this.client.from('challenges').select('id').limit(1);
      if (!tableError && data) {
        this.isConnected = true;
      }
    } catch (err) {
      console.warn('Error probando conexión Supabase:', err);
    }

    this.updateStatusBadge();
    return this.isConnected;
  }

  updateStatusBadge() {
    const badge = document.getElementById('supabase-status-badge');
    const text = document.getElementById('supabase-status-text');
    if (badge && text) {
      if (this.isConnected) {
        badge.style.background = 'rgba(6, 214, 160, 0.2)';
        badge.style.borderColor = 'var(--neon-emerald)';
        badge.style.color = '#06d6a0';
        text.textContent = '⚡ Supabase Conectado';
      } else if (this.anonKey) {
        badge.style.background = 'rgba(255, 183, 3, 0.2)';
        badge.style.borderColor = 'var(--neon-gold)';
        badge.style.color = '#ffb703';
        text.textContent = '🟡 Verificando Supabase';
      } else {
        badge.style.background = 'rgba(255, 255, 255, 0.05)';
        badge.style.borderColor = 'var(--border-color)';
        badge.style.color = 'var(--text-secondary)';
        text.textContent = '⚙️ Conectar Supabase';
      }
    }
  }

  // Canal Realtime para una sala específica
  subscribeToRoom(pin, onMessage) {
    if (!this.client || !this.isConnected) return null;

    if (this.activeRealtimeChannel) {
      this.client.removeChannel(this.activeRealtimeChannel);
    }

    const channel = this.client.channel(`room_${pin}`, {
      config: { broadcast: { self: false } }
    });

    channel.on('broadcast', { event: 'game_event' }, (payload) => {
      if (onMessage) onMessage(payload.payload);
    });

    channel.subscribe((status) => {
      console.log(`Canal Supabase Realtime para sala ${pin}:`, status);
    });

    this.activeRealtimeChannel = channel;
    return channel;
  }

  sendBroadcast(pin, eventData) {
    if (this.activeRealtimeChannel && this.isConnected) {
      this.activeRealtimeChannel.send({
        type: 'broadcast',
        event: 'game_event',
        payload: eventData
      });
    }
  }

  // Sincronizar retos con la base de datos
  async syncChallenges(localChallenges) {
    if (!this.client || !this.isConnected) return;
    try {
      const { data, error } = await this.client.from('challenges').select('*');
      if (!error) {
        if (data && data.length > 0) {
          // Mezclar retos en la nube con los locales
          const cloudIds = new Set(data.map(c => c.id));
          const merged = [
            ...data,
            ...localChallenges.filter(c => !cloudIds.has(c.id))
          ];
          window.appState.challenges = merged;
          saveGlobalState(window.appState);
        } else if (localChallenges && localChallenges.length > 0) {
          // Sembrar la tabla challenges en Supabase
          const formatted = localChallenges.map(c => ({
            id: c.id,
            title: c.title,
            description: c.description || '',
            category: c.category,
            category_name: c.categoryName || 'General',
            author: c.author || 'Profesor',
            author_avatar: c.authorAvatar || '👨‍🏫',
            plays: c.plays || 0,
            difficulty: c.difficulty || 'Medio',
            banner: c.banner || '',
            time_per_question: c.timePerQuestion || 20,
            points_standard: c.pointsStandard || 1000,
            is_public: true,
            questions: c.questions || []
          }));
          await this.client.from('challenges').upsert(formatted);
          console.log('⚡ Retos predeterminados sincronizados en Supabase.');
        }
      }
    } catch (e) {
      console.warn('Error sincronizando retos:', e);
    }
  }

  // Guardar borrador progresivo del asistente en Supabase
  async saveWizardDraft(draftId, projectId, userId, currentStep, completedSteps, draftData) {
    if (!this.client || !this.isConnected) return false;
    try {
      const { error } = await this.client.from('govdata_wizard_drafts').upsert({
        id: draftId,
        project_id: projectId,
        user_id: userId || 'anon',
        current_step: currentStep || 1,
        completed_steps: completedSteps || [],
        draft_data: draftData || {},
        updated_at: new Date().toISOString()
      });
      return !error;
    } catch (e) {
      return false;
    }
  }

  // Guardar proyecto completo de GovData Nexus y sus recursos en Supabase
  async saveGovDataProject(projectObj) {
    if (!this.client || !this.isConnected || !projectObj || !projectObj.id) return false;
    try {
      const row = {
        id: projectObj.id,
        slug: projectObj.slug || projectObj.id,
        name: projectObj.title || projectObj.name || 'Proyecto Sin Título',
        subtitle: projectObj.subtitle || '',
        short_description: projectObj.shortDescription || projectObj.description || '',
        full_description: projectObj.fullDescription || '',
        category: projectObj.category || 'tecnologia',
        category_name: projectObj.categoryName || 'Tecnología & Programación',
        project_subtype: projectObj.projectSubtype || 'Gobierno de Datos e IA',
        tags: Array.isArray(projectObj.tags) ? projectObj.tags : [],
        target_audience: projectObj.targetAudience || '',
        problem_statement: projectObj.problemStatement || '',
        objectives: projectObj.mainObjective || '',
        benefits: projectObj.benefits || '',
        value_proposition: projectObj.valueProposition || {},
        responsible: projectObj.teamLead || projectObj.author || '',
        preparation_status: projectObj.preparationStatus || 'en_desarrollo',
        publication_status: projectObj.publicationStatus || 'draft',
        main_image: projectObj.mainImage || projectObj.banner || '',
        thumbnail_image: projectObj.thumbnailImage || '',
        video_url: projectObj.videoConfig?.url || '',
        video_config: projectObj.videoConfig || {},
        visual_assets: projectObj.visualAssets || [],
        external_links: projectObj.externalLinks || [],
        landing_config: projectObj.landingConfig || {},
        visibility_config: { isPublic: projectObj.publicationStatus === 'published' },
        display_order: Number(projectObj.displayOrder || 0),
        created_by: projectObj.authorId || projectObj.author || '',
        author_name: projectObj.author || '',
        author_role: projectObj.authorRole || 'teacher',
        updated_at: new Date().toISOString()
      };
      await this.client.from('govdata_projects').upsert(row);

      if (Array.isArray(projectObj.resources) && projectObj.resources.length > 0) {
        const resRows = projectObj.resources.map((r, idx) => ({
          id: r.id || `${projectObj.id}_res_${idx}`,
          project_id: projectObj.id,
          visible_name: r.name || 'Recurso',
          resource_type: r.type || 'pdf',
          description: r.description || '',
          file_url: r.url || '',
          storage_path: r.storagePath || '',
          format: r.format || 'PDF',
          size_bytes: Number(r.sizeBytes || 0),
          size_label: r.sizeLabel || '',
          category: r.category || 'Documentación',
          visibility: r.visibility === 'private' ? 'private' : 'public',
          display_order: idx,
          processing_status: r.status || 'verified',
          uploaded_by: projectObj.author || 'Usuario'
        }));
        await this.client.from('govdata_project_resources').upsert(resRows);
      }
      return true;
    } catch (e) {
      console.warn('Aviso al sincronizar proyecto en tabla govdata_projects:', e);
      return false;
    }
  }

  // Subir archivo a Supabase Storage separando buckets públicos y privados
  async uploadProjectFile(file, projectId, visibility = 'public') {
    if (!this.client || !this.isConnected || !file) return null;
    try {
      const bucket = visibility === 'private' ? 'govdata-private' : 'govdata-public';
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
      const storagePath = `${projectId}/${Date.now()}_${safeName}`;
      const { data, error } = await this.client.storage.from(bucket).upload(storagePath, file, {
        cacheControl: '3600',
        upsert: false
      });
      if (error || !data) return null;
      if (visibility === 'private') {
        const { data: signed } = await this.client.storage.from(bucket).createSignedUrl(storagePath, 60 * 60 * 24 * 7);
        return { url: signed?.signedUrl || '', storagePath, bucket };
      } else {
        const { data: pub } = this.client.storage.from(bucket).getPublicUrl(storagePath);
        return { url: pub?.publicUrl || '', storagePath, bucket };
      }
    } catch (e) {
      return null;
    }
  }
}

window.supabaseService = new SupabaseService();
