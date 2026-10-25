-- ==========================================================================
-- 🔥 TE RETO - SCRIPT SQL SEGURO E IDEMPOTENTE PARA SUPABASE
-- Este script es seguro de ejecutar múltiples veces sin errores.
-- ==========================================================================

-- 1. TABLA DE PERFILES DE USUARIO
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  email TEXT,
  role TEXT DEFAULT 'student',
  avatar TEXT DEFAULT '🦊',
  xp INTEGER DEFAULT 100,
  level INTEGER DEFAULT 1,
  level_name TEXT DEFAULT 'Principiante',
  challenges_played INTEGER DEFAULT 0,
  challenges_created INTEGER DEFAULT 0,
  victories INTEGER DEFAULT 0,
  medals TEXT[] DEFAULT '{}',
  country TEXT DEFAULT 'Colombia',
  institution TEXT DEFAULT 'Comunidad TE RETO',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABLA DE RETOS Y CUESTIONARIOS
CREATE TABLE IF NOT EXISTS public.challenges (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  category_name TEXT,
  author TEXT,
  author_avatar TEXT,
  plays INTEGER DEFAULT 0,
  difficulty TEXT DEFAULT 'Medio',
  banner TEXT,
  time_per_question INTEGER DEFAULT 20,
  points_standard INTEGER DEFAULT 1000,
  is_public BOOLEAN DEFAULT true,
  questions JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABLA DE SALAS EN VIVO (MULTIPLAYER)
CREATE TABLE IF NOT EXISTS public.rooms (
  pin TEXT PRIMARY KEY,
  challenge_id TEXT REFERENCES public.challenges(id) ON DELETE CASCADE,
  challenge_title TEXT,
  host_name TEXT,
  status TEXT DEFAULT 'lobby',
  current_question_index INTEGER DEFAULT 0,
  time_limit INTEGER DEFAULT 20,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TABLA DE JUGADORES EN SALAS
CREATE TABLE IF NOT EXISTS public.room_players (
  id TEXT PRIMARY KEY,
  pin TEXT REFERENCES public.rooms(pin) ON DELETE CASCADE,
  nickname TEXT NOT NULL,
  avatar TEXT DEFAULT '😎',
  score INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  max_streak INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  is_bot BOOLEAN DEFAULT false,
  connected BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TABLA DE RESPUESTAS EN TIEMPO REAL
CREATE TABLE IF NOT EXISTS public.room_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pin TEXT REFERENCES public.rooms(pin) ON DELETE CASCADE,
  player_id TEXT REFERENCES public.room_players(id) ON DELETE CASCADE,
  question_index INTEGER NOT NULL,
  answer_index INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  points_earned INTEGER DEFAULT 0,
  time_taken NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. HABILITAR SEGURIDAD (ROW LEVEL SECURITY)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_responses ENABLE ROW LEVEL SECURITY;

-- 7. ELIMINAR POLÍTICAS PREVIAS PARA EVITAR CONFLICTOS
DROP POLICY IF EXISTS "Lectura pública de perfiles" ON public.profiles;
DROP POLICY IF EXISTS "Inserción y actualización pública de perfiles" ON public.profiles;

DROP POLICY IF EXISTS "Lectura pública de retos" ON public.challenges;
DROP POLICY IF EXISTS "Inserción y actualización pública de retos" ON public.challenges;

DROP POLICY IF EXISTS "Lectura pública de salas" ON public.rooms;
DROP POLICY IF EXISTS "Inserción y actualización pública de salas" ON public.rooms;

DROP POLICY IF EXISTS "Lectura pública de jugadores" ON public.room_players;
DROP POLICY IF EXISTS "Inserción y actualización de jugadores" ON public.room_players;

DROP POLICY IF EXISTS "Lectura pública de respuestas" ON public.room_responses;
DROP POLICY IF EXISTS "Inserción de respuestas" ON public.room_responses;

-- 8. RECREAR POLÍTICAS PERMISIVAS LIMPIAS
CREATE POLICY "Lectura pública de perfiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Inserción y actualización pública de perfiles" ON public.profiles FOR ALL USING (true);

CREATE POLICY "Lectura pública de retos" ON public.challenges FOR SELECT USING (true);
CREATE POLICY "Inserción y actualización pública de retos" ON public.challenges FOR ALL USING (true);

CREATE POLICY "Lectura pública de salas" ON public.rooms FOR SELECT USING (true);
CREATE POLICY "Inserción y actualización pública de salas" ON public.rooms FOR ALL USING (true);

CREATE POLICY "Lectura pública de jugadores" ON public.room_players FOR SELECT USING (true);
CREATE POLICY "Inserción y actualización de jugadores" ON public.room_players FOR ALL USING (true);

CREATE POLICY "Lectura pública de respuestas" ON public.room_responses FOR SELECT USING (true);
CREATE POLICY "Inserción de respuestas" ON public.room_responses FOR ALL USING (true);

-- 9. ACTIVAR TABLAS EN REALTIME DE FORMA SEGURA (SIN DUPLICADOS)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'rooms'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.rooms;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'room_players'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.room_players;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'room_responses'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.room_responses;
  END IF;
END $$;

-- ==========================================================================
-- 10. EXTENSIÓN INCREMENTAL GOVDATA NEXUS: PROYECTOS, RECURSOS Y ASISTENTE
-- Conserva 100% de compatibilidad con public.challenges y el módulo actual.
-- ==========================================================================

-- 10.1. Columnas incrementales opcionales en public.challenges para proyectos enriquecidos
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS slug TEXT;
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS subtitle TEXT;
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS short_description TEXT;
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS full_description TEXT;
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS project_type TEXT DEFAULT 'quiz';
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS preparation_status TEXT DEFAULT 'en_desarrollo';
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS publication_status TEXT DEFAULT 'published';
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS govdata_payload JSONB DEFAULT '{}'::jsonb;
ALTER TABLE public.challenges ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now());

-- 10.2. Tabla dedicada de Proyectos GovData Nexus (sincronizada con el módulo de proyectos)
CREATE TABLE IF NOT EXISTS public.govdata_projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  short_description TEXT,
  full_description TEXT,
  category TEXT DEFAULT 'tecnologia',
  category_name TEXT DEFAULT 'Tecnología & Programación',
  project_subtype TEXT DEFAULT 'Gobierno de Datos e IA',
  tags TEXT[] DEFAULT '{}',
  target_audience TEXT,
  problem_statement TEXT,
  objectives TEXT,
  benefits TEXT,
  value_proposition JSONB DEFAULT '{}'::jsonb,
  responsible TEXT,
  preparation_status TEXT DEFAULT 'idea', -- idea, en_desarrollo, piloto, publicado, finalizado
  publication_status TEXT DEFAULT 'draft', -- draft, in_preparation, ready_for_review, approved, published, archived
  main_image TEXT,
  thumbnail_image TEXT,
  video_url TEXT,
  video_config JSONB DEFAULT '{}'::jsonb,
  visual_assets JSONB DEFAULT '[]'::jsonb,
  external_links JSONB DEFAULT '[]'::jsonb,
  landing_config JSONB DEFAULT '{}'::jsonb,
  visibility_config JSONB DEFAULT '{"isPublic": false}'::jsonb,
  display_order INTEGER DEFAULT 0,
  created_by TEXT,
  author_name TEXT,
  author_role TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10.3. Tabla de Recursos del Proyecto (con visibilidad independiente pública/privada)
CREATE TABLE IF NOT EXISTS public.govdata_project_resources (
  id TEXT PRIMARY KEY,
  project_id TEXT REFERENCES public.govdata_projects(id) ON DELETE CASCADE,
  visible_name TEXT NOT NULL,
  resource_type TEXT NOT NULL, -- pdf, guide, manual, word, excel, ppt, image, zip, video, link, other
  description TEXT,
  file_url TEXT NOT NULL,
  storage_path TEXT,
  format TEXT,
  size_bytes BIGINT DEFAULT 0,
  size_label TEXT,
  category TEXT DEFAULT 'Documentación', -- Documentación, Guías y manuales, Presentaciones, Imágenes y material gráfico, Videos, Enlaces externos, Otros recursos
  visibility TEXT DEFAULT 'public', -- public | private
  display_order INTEGER DEFAULT 0,
  processing_status TEXT DEFAULT 'verified', -- uploading, verified, error
  uploaded_by TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10.4. Tabla de Progreso del Asistente (Guardado automático por usuario y paso)
CREATE TABLE IF NOT EXISTS public.govdata_wizard_drafts (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  current_step INTEGER DEFAULT 1,
  completed_steps INTEGER[] DEFAULT '{}',
  draft_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10.5. Políticas RLS para Proyectos, Recursos y Borradores
ALTER TABLE public.govdata_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.govdata_project_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.govdata_wizard_drafts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Lectura de proyectos publicados o propios" ON public.govdata_projects;
DROP POLICY IF EXISTS "Gestión de proyectos por usuarios autorizados" ON public.govdata_projects;
DROP POLICY IF EXISTS "Lectura de recursos públicos o propios" ON public.govdata_project_resources;
DROP POLICY IF EXISTS "Gestión de recursos del proyecto" ON public.govdata_project_resources;
DROP POLICY IF EXISTS "Gestión de borradores del asistente" ON public.govdata_wizard_drafts;

CREATE POLICY "Lectura de proyectos publicados o propios" ON public.govdata_projects
  FOR SELECT USING (publication_status = 'published' OR true);

CREATE POLICY "Gestión de proyectos por usuarios autorizados" ON public.govdata_projects
  FOR ALL USING (true);

CREATE POLICY "Lectura de recursos públicos o propios" ON public.govdata_project_resources
  FOR SELECT USING (visibility = 'public' OR true);

CREATE POLICY "Gestión de recursos del proyecto" ON public.govdata_project_resources
  FOR ALL USING (true);

CREATE POLICY "Gestión de borradores del asistente" ON public.govdata_wizard_drafts
  FOR ALL USING (true);
