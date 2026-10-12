/**
 * 🔥 MENTIX - Vista de Proyectos & Retos (Projects View)
 * Gestión integral de proyectos educativos: Diapositivas, Videos interactivos y Quizzes gamificados.
 */

window.ProjectsView = {
  currentCategory: 'all',
  currentTypeFilter: 'all', // 'all' | 'presentation' | 'video' | 'document' | 'url'
  searchQuery: '',
  viewMode: 'list', // 'list' | 'selector'
  selectedProjectTypeId: 'presentation',

  projectModes: [
    {
      id: 'presentation',
      name: 'Presentación Interactiva',
      shortName: 'Presentación Interactiva',
      badge: '📊 DIAPOSITIVAS',
      icon: '📊',
      themeColor: '#7c3aed',
      accentColor: '#a78bfa',
      gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 55%, #00f5d4 100%)',
      actionLabel: '¡Crear Presentación!',
      description: 'Diapositivas visuales para explicar conceptos en clase con notas del orador, imágenes, bloques de código y videos.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-pres" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#170b30" />
                <stop offset="55%" stop-color="#4c1d95" />
                <stop offset="100%" stop-color="#6d28d9" />
              </linearGradient>
              <linearGradient id="proj-slide-card" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2e1065" />
                <stop offset="100%" stop-color="#1e1b4b" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-pres)" />
            <circle cx="330" cy="45" r="55" fill="rgba(0, 245, 212, 0.1)" />
            <circle cx="70" cy="195" r="65" fill="rgba(167, 139, 250, 0.12)" />
            <!-- Diapositiva trasera -->
            <rect x="92" y="34" width="230" height="140" rx="14" fill="rgba(124, 58, 237, 0.35)" stroke="rgba(196, 181, 253, 0.4)" stroke-width="2" transform="rotate(4 207 104)" />
            <!-- Pantalla principal de diapositiva -->
            <rect x="78" y="42" width="244" height="148" rx="14" fill="url(#proj-slide-card)" stroke="#00f5d4" stroke-width="2.5" />
            <rect x="98" y="60" width="115" height="14" rx="7" fill="#00f5d4" />
            <rect x="98" y="82" width="82" height="9" rx="4.5" fill="rgba(255,255,255,0.45)" />
            <!-- Gráfica de barras 3D dentro de la diapositiva -->
            <rect x="104" y="138" width="24" height="32" rx="5" fill="#f72585" />
            <rect x="138" y="118" width="24" height="52" rx="5" fill="#ffd166" />
            <rect x="172" y="98" width="24" height="72" rx="5" fill="#00f5d4" />
            <!-- Tarjeta visual derecha -->
            <rect x="218" y="96" width="84" height="74" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(167,139,250,0.5)" stroke-width="1.5" />
            <circle cx="260" cy="124" r="14" fill="#a78bfa" />
            <rect x="234" y="147" width="52" height="8" rx="4" fill="rgba(255,255,255,0.6)" />
          </svg>
        `;
      }
    },
    {
      id: 'video',
      name: 'Video Clase Interactiva',
      shortName: 'Video Clase',
      badge: '🎬 VIDEO CLASE',
      icon: '🎬',
      themeColor: '#ef4444',
      accentColor: '#f87171',
      gradient: 'linear-gradient(135deg, #7f1d1d 0%, #ef4444 55%, #f97316 100%)',
      actionLabel: '¡Crear Video Clase!',
      description: 'Integra videos (YouTube, Drive, Vimeo o MP4) con capítulos interactivos, resumen pedagógico y preguntas de debate.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-vid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#28080c" />
                <stop offset="55%" stop-color="#991b1b" />
                <stop offset="100%" stop-color="#dc2626" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-vid)" />
            <circle cx="320" cy="50" r="60" fill="rgba(251, 146, 60, 0.14)" />
            <!-- Reproductor de video 3D -->
            <rect x="75" y="38" width="250" height="154" rx="16" fill="#0f172a" stroke="#f87171" stroke-width="2.5" />
            <!-- Claqueta superior -->
            <path d="M75 54 Q75 38 91 38 L309 38 Q325 38 325 54 L325 64 L75 64 Z" fill="#1e293b" />
            <line x1="105" y1="38" x2="90" y2="64" stroke="#f87171" stroke-width="5" />
            <line x1="155" y1="38" x2="140" y2="64" stroke="#ffd166" stroke-width="5" />
            <line x1="205" y1="38" x2="190" y2="64" stroke="#f87171" stroke-width="5" />
            <line x1="255" y1="38" x2="240" y2="64" stroke="#ffd166" stroke-width="5" />
            <line x1="305" y1="38" x2="290" y2="64" stroke="#f87171" stroke-width="5" />
            <!-- Botón Play central brillante -->
            <circle cx="200" cy="118" r="30" fill="#ef4444" stroke="#ffffff" stroke-width="2.5" />
            <polygon points="193,103 193,133 217,118" fill="#ffffff" />
            <!-- Barra de progreso con capítulos -->
            <rect x="98" y="168" width="204" height="7" rx="3.5" fill="rgba(255,255,255,0.2)" />
            <rect x="98" y="168" width="118" height="7" rx="3.5" fill="#00f5d4" />
            <circle cx="145" cy="171.5" r="5" fill="#ffd166" />
            <circle cx="216" cy="171.5" r="6.5" fill="#ffffff" stroke="#00f5d4" stroke-width="2.5" />
            <circle cx="265" cy="171.5" r="5" fill="#ffd166" />
          </svg>
        `;
      }
    },
    {
      id: 'document',
      name: 'Documento de Clase',
      shortName: 'Documento de Clase',
      badge: '📄 DOCUMENTO',
      icon: '📄',
      themeColor: '#3b82f6',
      accentColor: '#60a5fa',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #00f5d4 100%)',
      actionLabel: '¡Crear Documento!',
      description: 'Redacta lecturas estructuradas por secciones, guías pedagógicas de estudio o adjunta documentos PDF completos.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-doc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#09193a" />
                <stop offset="55%" stop-color="#1d4ed8" />
                <stop offset="100%" stop-color="#0284c7" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-doc)" />
            <circle cx="85" cy="60" r="50" fill="rgba(96, 165, 250, 0.15)" />
            <!-- Hoja trasera -->
            <rect x="138" y="26" width="140" height="182" rx="12" fill="rgba(147, 197, 253, 0.25)" transform="rotate(6 208 117)" />
            <!-- Hoja principal -->
            <rect x="125" y="28" width="150" height="184" rx="12" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5" />
            <!-- Encabezado del documento -->
            <rect x="145" y="48" width="76" height="14" rx="6" fill="#38bdf8" />
            <rect x="230" y="46" width="26" height="18" rx="5" fill="rgba(239, 68, 68, 0.85)" />
            <text x="243" y="58" font-family="sans-serif" font-weight="900" font-size="9" fill="#ffffff" text-anchor="middle">PDF</text>
            <!-- Líneas de lectura -->
            <rect x="145" y="76" width="110" height="8" rx="4" fill="rgba(255,255,255,0.75)" />
            <rect x="145" y="92" width="96" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
            <rect x="145" y="108" width="104" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
            <!-- Bloque destacado -->
            <rect x="145" y="128" width="110" height="42" rx="8" fill="rgba(0, 245, 212, 0.14)" stroke="#00f5d4" stroke-width="1.5" />
            <rect x="155" y="140" width="65" height="7" rx="3.5" fill="#00f5d4" />
            <rect x="155" y="153" width="85" height="6" rx="3" fill="rgba(255,255,255,0.65)" />
            <rect x="145" y="182" width="78" height="8" rx="4" fill="rgba(255,255,255,0.45)" />
          </svg>
        `;
      }
    },
    {
      id: 'url',
      name: 'Recurso por URL / Simulador',
      shortName: 'Recurso por URL',
      badge: '🌐 ENLACE / URL',
      icon: '🌐',
      themeColor: '#10b981',
      accentColor: '#34d399',
      gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 55%, #00f5d4 100%)',
      actionLabel: '¡Agregar Recurso URL!',
      description: 'Incrusta simuladores interactivos (PhET, GeoGebra), mapas, tableros colaborativos, páginas de consulta y sitios web.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-url" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#04261f" />
                <stop offset="55%" stop-color="#047857" />
                <stop offset="100%" stop-color="#10b981" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-url)" />
            <!-- Ventana de navegador web -->
            <rect x="70" y="34" width="260" height="168" rx="14" fill="#0f172a" stroke="#34d399" stroke-width="2.5" />
            <rect x="70" y="34" width="260" height="30" rx="14" fill="#1e293b" />
            <circle cx="88" cy="49" r="4.5" fill="#ef4444" />
            <circle cx="102" cy="49" r="4.5" fill="#ffd166" />
            <circle cx="116" cy="49" r="4.5" fill="#10b981" />
            <!-- Barra de dirección URL -->
            <rect x="132" y="41" width="178" height="16" rx="8" fill="#0f172a" stroke="rgba(52,211,153,0.45)" stroke-width="1" />
            <text x="221" y="52.5" font-family="monospace" font-weight="700" font-size="9.5" fill="#00f5d4" text-anchor="middle">https://mentix.edu/lab</text>
            <!-- Globo interactivo central -->
            <circle cx="200" cy="132" r="44" fill="rgba(16, 185, 129, 0.16)" stroke="#00f5d4" stroke-width="2.5" />
            <ellipse cx="200" cy="132" rx="22" ry="44" fill="none" stroke="#34d399" stroke-width="2" />
            <line x1="156" y1="132" x2="244" y2="132" stroke="#34d399" stroke-width="2" />
            <line x1="163" y1="112" x2="237" y2="112" stroke="rgba(52,211,153,0.65)" stroke-width="1.5" />
            <line x1="163" y1="152" x2="237" y2="152" stroke="rgba(52,211,153,0.65)" stroke-width="1.5" />
          </svg>
        `;
      }
    },
    {
      id: 'import_presentation',
      name: 'Importar Presentación',
      shortName: 'Importar Presentación',
      badge: '📥 IMPORTAR PPTX / PDF',
      icon: '📥',
      themeColor: '#9333ea',
      accentColor: '#e879f9',
      gradient: 'linear-gradient(135deg, #581c87 0%, #9333ea 55%, #f72585 100%)',
      actionLabel: '¡Subir Presentación!',
      description: 'Importa archivos PDF, PowerPoint o pega el contenido de tus diapositivas para convertirlas automáticamente en una presentación.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-imppres" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#240a38" />
                <stop offset="55%" stop-color="#6b21a8" />
                <stop offset="100%" stop-color="#be185d" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-imppres)" />
            <rect x="85" y="44" width="230" height="150" rx="16" fill="#0f172a" stroke="#e879f9" stroke-width="2.5" stroke-dasharray="8 5" />
            <circle cx="200" cy="105" r="34" fill="rgba(232, 121, 249, 0.2)" stroke="#e879f9" stroke-width="2" />
            <path d="M200 122 L200 88 M186 102 L200 88 L214 102" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="135" y="154" width="130" height="22" rx="11" fill="#9333ea" />
            <text x="200" y="169" font-family="sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle">PPTX • PDF • TEXTO</text>
          </svg>
        `;
      }
    },
    {
      id: 'import_document',
      name: 'Importar Documento',
      shortName: 'Importar Documento',
      badge: '📑 IMPORTAR PDF / GUÍA',
      icon: '📑',
      themeColor: '#0284c7',
      accentColor: '#38bdf8',
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 55%, #00f5d4 100%)',
      actionLabel: '¡Subir Documento!',
      description: 'Importa un archivo PDF o texto estructurado desde tu dispositivo para crear una guía de lectura interactiva al instante.',
      renderIllustration() {
        return `
          <svg viewBox="0 0 400 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="proj-bg-impdoc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#071f33" />
                <stop offset="55%" stop-color="#0369a1" />
                <stop offset="100%" stop-color="#0d9488" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" rx="16" fill="url(#proj-bg-impdoc)" />
            <rect x="85" y="44" width="230" height="150" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8 5" />
            <circle cx="200" cy="105" r="34" fill="rgba(56, 189, 248, 0.2)" stroke="#00f5d4" stroke-width="2" />
            <path d="M200 122 L200 88 M186 102 L200 88 L214 102" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="135" y="154" width="130" height="22" rx="11" fill="#0284c7" />
            <text x="200" y="169" font-family="sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle">PDF • GUÍA • LECTURA</text>
          </svg>
        `;
      }
    }
  ],

  getProjectMode(id) {
    return this.projectModes.find(m => m.id === id) || this.projectModes[0];
  },

  render() {
    const container = document.getElementById('view-projects');
    if (!container) return;

    if (this.viewMode === 'selector') {
      this.renderProjectSelectorView(container);
      return;
    }

    const u = window.appState.currentUser;
    // En MENTIX, los proyectos abarcan: Presentaciones, Video Clases, Documentos Didácticos y Enlaces Web/URL
    const allProjects = (window.appState.challenges || []).filter(c => 
      c.projectType === 'presentation' || c.projectType === 'video' || c.projectType === 'document' || c.projectType === 'url'
    );
    const categories = window.appState.categories || [];

    // Reconciliar categorías
    let needsSave = false;
    allProjects.forEach(proj => {
      if (proj.category) {
        const catExists = categories.find(cat => cat.id === proj.category);
        if (!catExists && proj.categoryName) {
          const catByName = categories.find(cat =>
            cat.name.toLowerCase() === (proj.categoryName || '').toLowerCase()
          );
          if (catByName) {
            proj.category = catByName.id;
            proj.categoryName = catByName.name;
            needsSave = true;
          }
        }
      }
    });
    if (needsSave && typeof saveGlobalState === 'function') {
      saveGlobalState(window.appState);
    }

    // Filtrar proyectos
    let filtered = allProjects;

    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(c => c.category === this.currentCategory);
    }

    if (this.currentTypeFilter !== 'all') {
      filtered = filtered.filter(c => c.projectType === this.currentTypeFilter);
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(c => 
        (c.title && c.title.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q)) ||
        (c.categoryName && c.categoryName.toLowerCase().includes(q)) ||
        (c.author && c.author.toLowerCase().includes(q))
      );
    }

    // Estadísticas exclusivas de Proyectos
    const totalProjects = allProjects.length;
    const totalSlides = allProjects.filter(c => c.projectType === 'presentation').reduce((acc, c) => acc + (c.slides ? c.slides.length : 0), 0);
    const totalVideos = allProjects.filter(c => c.projectType === 'video').length;
    const totalDocs = allProjects.filter(c => c.projectType === 'document').length;
    const totalUrls = allProjects.filter(c => c.projectType === 'url').length;

    container.innerHTML = `
      <div style="max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.25rem 5rem;">
        
        <!-- Header Principal de Proyectos -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(0, 245, 212, 0.12); border: 1px solid var(--neon-cyan); padding: 0.35rem 0.95rem; border-radius: 9999px; margin-bottom: 0.75rem;">
              <span>📁</span>
              <span style="font-weight: 800; font-size: 0.85rem; color: var(--neon-cyan); text-transform: uppercase; letter-spacing: 0.5px;">Panel de Proyectos Didácticos</span>
            </div>
            <h1 style="font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; margin: 0 0 0.5rem;">
              <span class="gradient-title">Mis Proyectos Educativos</span>
            </h1>
            <p style="color: var(--text-secondary); font-size: 1.05rem; margin: 0; max-width: 650px;">
              Diseña lecciones completas con presentaciones, video clases, documentos didácticos o enlaces web y simuladores.
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
            <button class="btn btn-cyan btn-lg" onclick="window.ProjectsView.openCreateProjectModal()" style="box-shadow: 0 6px 24px rgba(0,245,212,0.4); font-weight: 900; padding: 0.85rem 1.65rem; font-size: 1.05rem;">
              <span>➕</span> <span>Crear Proyecto</span>
            </button>
            <button class="btn btn-outline" onclick="window.appRouter.openCategoryModal()" style="padding: 0.8rem 1.2rem; font-weight: 800;">
              <span>🏷️</span> Categorías
            </button>
          </div>
        </div>

        <!-- Barra de Estadísticas Resumen -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2.25rem;">
          <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(0, 245, 212, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: var(--neon-cyan);">
              📁
            </div>
            <div>
              <div style="font-size: 1.7rem; font-weight: 900; color: var(--text-primary); line-height: 1;">${totalProjects}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Total Proyectos</div>
            </div>
          </div>

          <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(124, 58, 237, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: #a78bfa;">
              📊
            </div>
            <div>
              <div style="font-size: 1.7rem; font-weight: 900; color: var(--text-primary); line-height: 1;">${totalSlides}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Diapositivas</div>
            </div>
          </div>

          <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(239, 68, 68, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: #f87171;">
              🎬
            </div>
            <div>
              <div style="font-size: 1.7rem; font-weight: 900; color: var(--text-primary); line-height: 1;">${totalVideos}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Video Clases</div>
            </div>
          </div>

          <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(59, 130, 246, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: #60a5fa;">
              📄
            </div>
            <div>
              <div style="font-size: 1.7rem; font-weight: 900; color: var(--text-primary); line-height: 1;">${totalDocs}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Documentos</div>
            </div>
          </div>

          <div class="glass-panel" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; color: #34d399;">
              🌐
            </div>
            <div>
              <div style="font-size: 1.7rem; font-weight: 900; color: var(--text-primary); line-height: 1;">${totalUrls}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Enlaces Web</div>
            </div>
          </div>
        </div>

        <!-- Filtros de Tipo de Proyecto y Buscador -->
        <div class="glass-panel" style="padding: 1.25rem; margin-bottom: 2rem;">
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            
            <!-- Selector de Tipo de Proyecto -->
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <button 
                onclick="window.ProjectsView.filterType('all')" 
                class="btn ${this.currentTypeFilter === 'all' ? 'btn-cyan' : 'btn-outline'}"
                style="padding: 0.45rem 0.9rem; font-size: 0.85rem; font-weight: 700;"
              >
                🌟 Todos (${allProjects.length})
              </button>
              <button 
                onclick="window.ProjectsView.filterType('presentation')" 
                class="btn ${this.currentTypeFilter === 'presentation' ? 'btn-cyan' : 'btn-outline'}"
                style="padding: 0.45rem 0.9rem; font-size: 0.85rem; font-weight: 700;"
              >
                📊 Diapositivas
              </button>
              <button 
                onclick="window.ProjectsView.filterType('video')" 
                class="btn ${this.currentTypeFilter === 'video' ? 'btn-cyan' : 'btn-outline'}"
                style="padding: 0.45rem 0.9rem; font-size: 0.85rem; font-weight: 700;"
              >
                🎬 Videos
              </button>
              <button 
                onclick="window.ProjectsView.filterType('document')" 
                class="btn ${this.currentTypeFilter === 'document' ? 'btn-cyan' : 'btn-outline'}"
                style="padding: 0.45rem 0.9rem; font-size: 0.85rem; font-weight: 700;"
              >
                📄 Documentos
              </button>
              <button 
                onclick="window.ProjectsView.filterType('url')" 
                class="btn ${this.currentTypeFilter === 'url' ? 'btn-cyan' : 'btn-outline'}"
                style="padding: 0.45rem 0.9rem; font-size: 0.85rem; font-weight: 700;"
              >
                🌐 Enlaces / URL
              </button>
            </div>

            <!-- Buscador -->
            <div style="flex: 1; min-width: 240px; position: relative;">
              <input 
                type="text" 
                id="projects-search-input"
                placeholder="🔍 Buscar por título o tema..." 
                value="${this.escapeHtml(this.searchQuery)}"
                oninput="window.ProjectsView.handleSearch(this.value)"
                style="width: 100%; padding: 0.7rem 1rem; border-radius: var(--border-radius-md); background: rgba(0,0,0,0.3); border: 1.5px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem; outline: none;"
              />
            </div>
          </div>

          <!-- Filtros de Categoría -->
          <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.35rem; max-width: 100%;">
            <button 
              onclick="window.ProjectsView.filterCategory('all')" 
              class="btn ${this.currentCategory === 'all' ? 'btn-primary' : 'btn-outline'}"
              style="padding: 0.4rem 0.85rem; font-size: 0.82rem; white-space: nowrap;"
            >
              Todas las Materias (${allProjects.length})
            </button>
            ${categories.map(cat => {
              const count = allProjects.filter(c => c.category === cat.id).length;
              return `
                <button 
                  onclick="window.ProjectsView.filterCategory('${cat.id}')" 
                  class="btn ${this.currentCategory === cat.id ? 'btn-primary' : 'btn-outline'}"
                  style="padding: 0.4rem 0.85rem; font-size: 0.82rem; white-space: nowrap;"
                >
                  <span>${cat.icon}</span> ${cat.name} (${count})
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Grid de Proyectos / Retos -->
        ${allProjects.length === 0 ? `
          <div class="glass-panel" style="text-align: center; padding: 4.5rem 1.5rem; border: 2px dashed rgba(0, 245, 212, 0.35); border-radius: 20px;">
            <div style="font-size: 3.8rem; margin-bottom: 1rem;">📁</div>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">Aún no has creado proyectos</h3>
            <p style="color: var(--text-secondary); font-size: 1rem; max-width: 500px; margin: 0 auto 1.75rem; line-height: 1.5;">
              Tu panel está limpio. Puedes crear tu primera presentación interactiva o video clase cuando desees.
            </p>
            <button class="btn btn-cyan btn-lg" onclick="window.ProjectsView.openCreateProjectModal()" style="font-weight: 900; box-shadow: 0 6px 20px rgba(0,245,212,0.35);">
              ➕ Crear Mi Primer Proyecto
            </button>
          </div>
        ` : (filtered.length === 0 ? `
          <div class="glass-panel" style="text-align: center; padding: 4rem 1.5rem;">
            <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">No se encontraron proyectos</h3>
            <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem;">
              No hay proyectos que coincidan con los filtros seleccionados.
            </p>
            <button class="btn btn-primary" onclick="window.ProjectsView.resetFilters()">
              Restablecer Filtros
            </button>
          </div>
        ` : `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
            ${filtered.map(c => this.renderProjectCard(c, u)).join('')}
          </div>
        `)}

      </div>
    `;
  },

  renderProjectCard(c, currentUser) {
    const isAuthor = window.appRouter ? window.appRouter.isChallengeOwner(c) : false;

    const diffBadge = c.difficulty === 'Difícil' || c.difficulty === 'hard'
      ? '<span class="badge-tag tag-hard">Difícil</span>'
      : ((c.difficulty === 'Medio' || c.difficulty === 'medium') ? '<span class="badge-tag tag-medium">Medio</span>' : '<span class="badge-tag tag-easy">Fácil</span>');

    const projectType = c.projectType || 'presentation';
    let typeBadge = '<span class="badge-tag" style="background: rgba(124, 58, 237, 0.85); color: white;">📊 Diapositivas</span>';
    let defaultBanner = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800';
    let cardAction = `window.appRouter.openPresentation('${c.id}')`;
    let countBadge = `📄 ${(c.slides ? c.slides.length : 0)} diaps`;

    if (projectType === 'video') {
      typeBadge = '<span class="badge-tag" style="background: rgba(239, 68, 68, 0.85); color: white;">🎬 Video Clase</span>';
      defaultBanner = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800';
      cardAction = `window.appRouter.openVideo('${c.id}')`;
      countBadge = `⏱️ ${c.duration || 'Video'}`;
    } else if (projectType === 'document') {
      typeBadge = '<span class="badge-tag" style="background: rgba(59, 130, 246, 0.85); color: white;">📄 Documento</span>';
      defaultBanner = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800';
      cardAction = `window.appRouter.openDocument('${c.id}')`;
      countBadge = (c.pdfPages && c.pdfPages.length > 0)
        ? `📄 ${c.pdfPages.length} págs (PDF)`
        : `📝 ${(c.sections ? c.sections.length : 1)} secciones`;
    } else if (projectType === 'url') {
      typeBadge = '<span class="badge-tag" style="background: rgba(16, 185, 129, 0.85); color: white;">🌐 Enlace / URL</span>';
      defaultBanner = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800';
      cardAction = `window.appRouter.openUrl('${c.id}')`;
      countBadge = `🔗 Enlace Web`;
    }

    return `
      <div class="challenge-card" onclick="${cardAction}" style="display: flex; flex-direction: column; height: 100%; cursor: pointer;">
        <div class="challenge-banner" style="background-image: url('${c.banner || defaultBanner}'); position: relative; height: 160px;">
          <div style="position: absolute; top: 0.6rem; left: 0.6rem; display: flex; gap: 0.35rem;">
            ${typeBadge}
          </div>
          <span class="badge-tag" style="position: absolute; bottom: 0.6rem; left: 0.6rem; background: rgba(0,0,0,0.65); color: white;">
            ${countBadge}
          </span>
          
          ${isAuthor ? `
            <button 
              class="btn btn-danger" 
              title="Eliminar este proyecto" 
              style="position: absolute; top: 0.6rem; right: 0.6rem; width: 34px; height: 34px; padding: 0; border-radius: 8px; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; z-index: 5; background: rgba(239, 68, 68, 0.9); box-shadow: 0 2px 8px rgba(0,0,0,0.4);" 
              onclick="event.stopPropagation(); window.appRouter.deleteChallenge('${c.id}')"
            >
              🗑️
            </button>
          ` : ''}
        </div>
        
        <div style="padding: 1.35rem; display: flex; flex-direction: column; flex: 1;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; color: var(--neon-cyan); font-weight: 800;">${c.categoryName || 'General'}</span>
            <span style="color: var(--text-muted);">•</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">
              ${projectType === 'presentation' ? (c.slides ? c.slides.length : 0) + ' diapositivas' : (projectType === 'video' ? (c.chapters ? c.chapters.length : 0) + ' capítulos' : (projectType === 'document' ? 'Lectura / Guía' : 'Recurso Web'))}
            </span>
          </div>

          <h3 style="font-size: 1.2rem; margin: 0 0 0.5rem; line-height: 1.3; font-weight: 800; color: var(--text-primary);">
            ${this.escapeHtml(c.title)}
          </h3>

          <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0 0 1.25rem; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.45;">
            ${this.escapeHtml(c.description || 'Proyecto interactivo para aprendizaje de clase.')}
          </p>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem; gap: 0.5rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.82rem; color: var(--text-muted);">
              <span>${c.authorAvatar || '👤'}</span>
              <span style="max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c.author || 'Docente'}</span>
            </div>

            <div style="display: flex; gap: 0.45rem; align-items: center;">
              ${projectType === 'presentation' ? `
                ${isAuthor ? `
                  <button 
                    class="btn btn-outline" 
                    title="Editar Diapositivas" 
                    style="padding: 0.45rem 0.75rem; font-size: 0.85rem;" 
                    onclick="event.stopPropagation(); window.appRouter.editPresentation('${c.id}')"
                  >
                    ✏️
                  </button>
                ` : ''}
                <button 
                  class="btn btn-cyan" 
                  style="padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 800; background: linear-gradient(135deg, #7c3aed, var(--neon-cyan)); border: none;" 
                  onclick="event.stopPropagation(); window.appRouter.openPresentation('${c.id}')"
                >
                  🖥️ Presentar
                </button>
              ` : (projectType === 'video' ? `
                ${isAuthor ? `
                  <button 
                    class="btn btn-outline" 
                    title="Editar Video Clase" 
                    style="padding: 0.45rem 0.75rem; font-size: 0.85rem;" 
                    onclick="event.stopPropagation(); window.appRouter.editVideo('${c.id}')"
                  >
                    ✏️
                  </button>
                ` : ''}
                <button 
                  class="btn btn-cyan" 
                  style="padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 800; background: linear-gradient(135deg, #ef4444, #dc2626); border: none;" 
                  onclick="event.stopPropagation(); window.appRouter.openVideo('${c.id}')"
                >
                  🎬 Ver Video
                </button>
              ` : (projectType === 'document' ? `
                ${isAuthor ? `
                  <button 
                    class="btn btn-outline" 
                    title="Editar Documento" 
                    style="padding: 0.45rem 0.75rem; font-size: 0.85rem;" 
                    onclick="event.stopPropagation(); window.appRouter.editDocument('${c.id}')"
                  >
                    ✏️
                  </button>
                ` : ''}
                <button 
                  class="btn btn-cyan" 
                  style="padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, var(--neon-cyan)); border: none;" 
                  onclick="event.stopPropagation(); window.appRouter.openDocument('${c.id}')"
                >
                  📄 Leer
                </button>
              ` : `
                ${isAuthor ? `
                  <button 
                    class="btn btn-outline" 
                    title="Editar Recurso Web" 
                    style="padding: 0.45rem 0.75rem; font-size: 0.85rem;" 
                    onclick="event.stopPropagation(); window.appRouter.editUrl('${c.id}')"
                  >
                    ✏️
                  </button>
                ` : ''}
                <button 
                  class="btn btn-cyan" 
                  style="padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 800; background: linear-gradient(135deg, #10b981, var(--neon-cyan)); border: none;" 
                  onclick="event.stopPropagation(); window.appRouter.openUrl('${c.id}')"
                >
                  🌐 Abrir
                </button>
              `))}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  filterType(type) {
    this.currentTypeFilter = type;
    if (window.soundEngine) window.soundEngine.playClick();
    this.render();
  },

  filterCategory(catId) {
    this.currentCategory = catId;
    if (window.soundEngine) window.soundEngine.playClick();
    this.render();
  },

  handleSearch(val) {
    this.searchQuery = val;
    this.render();
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.currentTypeFilter = 'all';
    this.searchQuery = '';
    this.render();
  },

  openCreateProjectModal() {
    this.viewMode = 'selector';
    if (!this.selectedProjectTypeId) this.selectedProjectTypeId = 'presentation';
    if (window.soundEngine) window.soundEngine.playClick();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  closeCreateProjectModal() {
    this.viewMode = 'list';
    const modal = document.getElementById('create-project-type-modal');
    if (modal) modal.classList.remove('active');
    if (window.soundEngine) window.soundEngine.playClick();
    this.render();
  },

  renderProjectSelectorView(container) {
    const selectedMode = this.projectModes.find((m) => m.id === this.selectedProjectTypeId) || this.projectModes[0];

    container.innerHTML = `
      <div class="experience-screen-container animate-fade-in">
        <!-- Header -->
        <div class="experience-header">
          <button class="experience-back-btn" onclick="ProjectsView.closeCreateProjectModal()">
            ← Volver a Proyectos
          </button>
          <div class="experience-title-group">
            <h1 class="experience-main-title">Seleccionar proyecto</h1>
            <p class="experience-subtitle">Para tu clase interactiva • Elige qué tipo de proyecto deseas crear</p>
          </div>
          <div class="experience-header-spacer"></div>
        </div>

        <!-- Project Types Grid -->
        <div class="experience-grid-wrapper">
          <div class="experience-grid">
            ${this.projectModes.map((mode) => this.renderProjectModeCard(mode, mode.id === selectedMode.id)).join('')}
          </div>
        </div>

        <!-- Bottom Sticky Selected Project Bar -->
        <div class="experience-action-bar" id="project-selector-action-bar">
          ${this.renderProjectConfigBar(selectedMode)}
        </div>
      </div>
    `;
  },

  renderProjectModeCard(mode, isSelected) {
    return `
      <div class="experience-card ${isSelected ? 'selected' : ''}" 
           id="project-mode-card-${mode.id}"
           style="--exp-accent: ${mode.accent}; --exp-bg: ${mode.bgGradient}; --exp-border: ${mode.borderColor};"
           onclick="ProjectsView.selectProjectType('${mode.id}')">
        
        <!-- Top Badges -->
        <div class="experience-card-badges">
          <span class="experience-card-badge" style="background: ${mode.accent};">
            ${mode.badge}
          </span>
          ${mode.timeLabel ? `<span class="experience-card-time">${mode.timeLabel}</span>` : ''}
        </div>

        <!-- Checkmark for selected -->
        <div class="experience-selected-check">✓</div>

        <!-- Artwork Illustration -->
        <div class="experience-illustration-box">
          ${mode.svg}
        </div>

        <!-- Card Footer -->
        <div class="experience-card-footer">
          <div class="experience-card-title-row">
            <span class="experience-card-emoji">${mode.icon}</span>
            <h3 class="experience-card-name">${mode.name}</h3>
          </div>
          <p class="experience-card-desc">${mode.tagline}</p>
          <div style="margin-top: 0.7rem;">
            <button class="btn btn-sm" 
                    style="width: 100%; background: ${mode.accent}; color: #fff; border: none; font-weight: 800; border-radius: 10px; padding: 0.5rem 0.75rem; box-shadow: 0 6px 16px rgba(0,0,0,0.25);"
                    onclick="event.stopPropagation(); ProjectsView.startNewProject('${mode.id}')">
              ${mode.ctaLabel || '➕ Crear proyecto'}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  renderProjectConfigBar(mode) {
    if (!mode) return '';
    return `
      <div class="experience-config-panel" style="--exp-accent: ${mode.accent};">
        <div class="experience-selected-summary">
          <div class="experience-selected-icon" style="background: ${mode.bgGradient}; border-color: ${mode.accent};">
            ${mode.icon}
          </div>
          <div class="experience-selected-text">
            <div class="experience-selected-name-row">
              <span class="experience-selected-name">${mode.name}</span>
              <span class="experience-selected-pill" style="background: ${mode.accent}22; color: ${mode.accent}; border: 1px solid ${mode.accent}55;">
                ${mode.badge}
              </span>
            </div>
            <p class="experience-selected-desc">${mode.description}</p>
          </div>
        </div>

        <div class="experience-config-controls">
          <button class="btn btn-secondary" onclick="ProjectsView.closeCreateProjectModal()">
            Cancelar
          </button>
          <button class="experience-launch-btn" style="background: linear-gradient(135deg, ${mode.accent}, #4f46e5);" onclick="ProjectsView.confirmSelectedProject()">
            <span>${mode.ctaLabel || '➕ Crear ' + mode.name}</span>
            <span class="experience-launch-arrow">➔</span>
          </button>
        </div>
      </div>
    `;
  },

  selectProjectType(modeId) {
    this.selectedProjectTypeId = modeId;
    if (window.soundEngine) window.soundEngine.playClick();

    document.querySelectorAll('#projects-content .experience-card').forEach((card) => {
      card.classList.remove('selected');
    });
    const activeCard = document.getElementById(`project-mode-card-${modeId}`);
    if (activeCard) activeCard.classList.add('selected');

    const selectedMode = this.projectModes.find((m) => m.id === modeId);
    const actionBar = document.getElementById('project-selector-action-bar');
    if (actionBar && selectedMode) {
      actionBar.innerHTML = this.renderProjectConfigBar(selectedMode);
    }
  },

  confirmSelectedProject() {
    this.startNewProject(this.selectedProjectTypeId || 'presentation');
  },

  startNewProject(type) {
    this.viewMode = 'list';
    const modal = document.getElementById('create-project-type-modal');
    if (modal) modal.classList.remove('active');

    if (type === 'presentation') {
      window.appRouter.createPresentation();
    } else if (type === 'video') {
      window.appRouter.createVideo();
    } else if (type === 'document') {
      window.appRouter.createDocument();
    } else if (type === 'url') {
      window.appRouter.createUrl();
    } else if (type === 'import_presentation') {
      this.openImportPresentationModal();
    } else if (type === 'import_document') {
      this.openImportDocumentModal();
    } else {
      window.appRouter.navigate('creator');
    }
  },

  openImportPresentationModal() {
    this.viewMode = 'list';
    window.appRouter.createPresentation();
    setTimeout(() => {
      if (window.PresentationView) {
        window.PresentationView.openImportModal();
      }
    }, 120);
  },

  openImportDocumentModal() {
    this.viewMode = 'list';
    window.appRouter.createDocument();
    setTimeout(() => {
      if (window.DocumentProjectView) {
        window.DocumentProjectView.openImportModal();
      }
    }, 120);
  },

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};
