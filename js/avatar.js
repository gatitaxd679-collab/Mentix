/**
 * 🦊 MENTIX / TE RETO - AVATAR ENGINE: KAHOOT CHARACTERS EDITION
 * Sistema de avatares oficiales estilo Kahoot con personajes animales vectoriales:
 * Zorro (Fox), Panda, Gato, Perro, León, Conejo, Koala, Búho, Mono, Lobo, etc.
 * Personalización completa con gorros, gafas, ropa, expresiones, físicas 3D y badges oficiales [ 🦊 Eimy  NIV. 3 ].
 */

window.AvatarEngine = {
  // Configuración predeterminada (basada exactamente en la captura del usuario: Zorro Eimy NIV. 3)
  defaultConfig: {
    animal: 'fox', // 'fox', 'panda', 'cat', 'dog', 'lion', 'rabbit', 'koala', 'owl', 'monkey', 'bear', 'wolf', 'tiger', 'penguin', 'unicorn', 'dragon', 'robot'
    alias: 'Eimy',
    title: 'Gamer Pro',
    themeColor: 'default', // 'default', 'neon_cyan', 'pink_punk', 'cyber_purple', 'golden', 'midnight', 'arctic_white', 'emerald'
    headwear: 'none', // 'none', 'headphones', 'gamer_cap', 'party_hat', 'crown', 'grad_hat', 'ninja_band', 'beanie', 'bow'
    headwearColor: '#00f5d4',
    eyewear: 'none', // 'none', 'sunglasses', 'nerd_glasses', 'cyber_visor', 'monocle', 'pirate_patch'
    eyewearColor: '#111827',
    outfit: 'hoodie', // 'none', 'hoodie', 'bowtie', 'scarf', 'cape', 'medal', 'bandana_neck'
    outfitColor: '#7928ca',
    expression: 'happy', // 'happy', 'cool', 'wink', 'star_eyes', 'focused'
    stageBg: 'matrix_neon', // 'matrix_neon', 'cyber_arcade', 'space_station', 'gamer_arena', 'chill_lab'
    emote: 'idle', // 'idle', 'wave', 'celebrate', 'dance', 'laugh', 'victory', 'focus', 'clap'
    preset: 'eimy_fox',
    xp: 220,
    level: 3, // NIV. 3 exactamente como la captura del usuario
    unlockedItems: ['fox', 'panda', 'cat', 'headphones', 'sunglasses', 'hoodie', 'crown', 'wave', 'victory']
  },

  // Catálogo de Animales / Personajes Kahoot
  animals: {
    fox: {
      name: 'Zorro',
      icon: '🦊',
      desc: 'El astuto zorro clásico de Kahoot.',
      primaryColor: '#f45d22',
      secondaryColor: '#ffffff'
    },
    panda: {
      name: 'Panda',
      icon: '🐼',
      desc: 'El oso panda tranquilo y experto.',
      primaryColor: '#ffffff',
      secondaryColor: '#1a1a1a'
    },
    cat: {
      name: 'Gato',
      icon: '🐱',
      desc: 'Felino ágil con reflejos legendarios.',
      primaryColor: '#f59e0b',
      secondaryColor: '#fef3c7'
    },
    dog: {
      name: 'Perro / Pug',
      icon: '🐶',
      desc: 'Cachorro leal y lleno de entusiasmo.',
      primaryColor: '#d97706',
      secondaryColor: '#ffedd5'
    },
    lion: {
      name: 'León',
      icon: '🦁',
      desc: 'El rey de la selva con melena dorada.',
      primaryColor: '#fbbf24',
      secondaryColor: '#b45309'
    },
    rabbit: {
      name: 'Conejo',
      icon: '🐰',
      desc: 'Súper veloz con orejas atentas.',
      primaryColor: '#e2e8f0',
      secondaryColor: '#fbcfe8'
    },
    koala: {
      name: 'Koala',
      icon: '🐨',
      desc: 'Orejas suaves y mente serena.',
      primaryColor: '#94a3b8',
      secondaryColor: '#ffffff'
    },
    owl: {
      name: 'Búho',
      icon: '🦉',
      desc: 'El sabio guardián del conocimiento.',
      primaryColor: '#64748b',
      secondaryColor: '#fde047'
    },
    monkey: {
      name: 'Mono',
      icon: '🐵',
      desc: 'Alegre, curioso e imparable.',
      primaryColor: '#92400e',
      secondaryColor: '#fed7aa'
    },
    bear: {
      name: 'Oso',
      icon: '🐻',
      desc: 'Fuerza mental y calma absoluta.',
      primaryColor: '#78350f',
      secondaryColor: '#fde68a'
    },
    wolf: {
      name: 'Lobo',
      icon: '🐺',
      desc: 'Líder de manada con visión certera.',
      primaryColor: '#64748b',
      secondaryColor: '#e2e8f0'
    },
    tiger: {
      name: 'Tigre',
      icon: '🐯',
      desc: 'Rayas de campeón y energía pura.',
      primaryColor: '#ea580c',
      secondaryColor: '#1a1a1a'
    },
    penguin: {
      name: 'Pingüino',
      icon: '🐧',
      desc: 'Elegante y fresco bajo presión.',
      primaryColor: '#0f172a',
      secondaryColor: '#ffffff'
    },
    unicorn: {
      name: 'Unicornio',
      icon: '🦄',
      desc: 'Magia brillante con cuerno cósmico.',
      primaryColor: '#fbcfe8',
      secondaryColor: '#fbbf24'
    },
    dragon: {
      name: 'Dragón',
      icon: '🐲',
      desc: 'Poder de fuego y espíritu gamer.',
      primaryColor: '#10b981',
      secondaryColor: '#f59e0b'
    },
    robot: {
      name: 'Robot Cuántico',
      icon: '🤖',
      desc: 'Cálculo a la velocidad de la luz.',
      primaryColor: '#0ea5e9',
      secondaryColor: '#00f5d4'
    }
  },

  // Presets temáticos
  presets: {
    eimy_fox: {
      name: 'Zorro Pro (Eimy)',
      icon: '🦊',
      desc: 'El personaje oficial de Kahoot con nivel 3.',
      config: {
        animal: 'fox',
        alias: 'Eimy',
        title: 'Gamer Pro',
        themeColor: 'default',
        headwear: 'none',
        eyewear: 'none',
        outfit: 'hoodie',
        outfitColor: '#7928ca',
        expression: 'happy',
        stageBg: 'matrix_neon',
        level: 3,
        xp: 220,
        emote: 'idle'
      }
    },
    panda_gamer: {
      name: 'Panda Gamer',
      icon: '🐼',
      desc: 'Panda con auriculares RGB y sudadera neón.',
      config: {
        animal: 'panda',
        alias: 'PandaByte',
        title: 'Cerebro Neón',
        themeColor: 'default',
        headwear: 'headphones',
        headwearColor: '#00f5d4',
        eyewear: 'none',
        outfit: 'hoodie',
        outfitColor: '#0f172a',
        expression: 'cool',
        stageBg: 'gamer_arena',
        level: 2,
        xp: 150,
        emote: 'victory'
      }
    },
    cat_ninja: {
      name: 'Gato Ninja',
      icon: '🐱',
      desc: 'Felino con bandana ninja y reflejos extremos.',
      config: {
        animal: 'cat',
        alias: 'NekoPro',
        title: 'Velocidad Rayo',
        themeColor: 'neon_cyan',
        headwear: 'ninja_band',
        headwearColor: '#ff007f',
        eyewear: 'none',
        outfit: 'bowtie',
        outfitColor: '#ff007f',
        expression: 'wink',
        stageBg: 'cyber_arcade',
        level: 3,
        xp: 260,
        emote: 'dance'
      }
    },
    dog_hero: {
      name: 'Perro Héroe',
      icon: '🐶',
      desc: 'Cachorro con capa de superhéroe y gafas gamer.',
      config: {
        animal: 'dog',
        alias: 'SuperPug',
        title: 'Maestro del Saber',
        themeColor: 'default',
        headwear: 'none',
        eyewear: 'sunglasses',
        eyewearColor: '#111827',
        outfit: 'cape',
        outfitColor: '#ef4444',
        expression: 'star_eyes',
        stageBg: 'space_station',
        level: 4,
        xp: 340,
        emote: 'celebrate'
      }
    },
    lion_king: {
      name: 'León Real',
      icon: '🦁',
      desc: 'Corona real dorada y pajarita elegante.',
      config: {
        animal: 'lion',
        alias: 'KingLeo',
        title: 'Leyenda de la Sala',
        themeColor: 'golden',
        headwear: 'crown',
        headwearColor: '#ffd166',
        eyewear: 'monocle',
        eyewearColor: '#ffd166',
        outfit: 'bowtie',
        outfitColor: '#b45309',
        expression: 'happy',
        stageBg: 'chill_lab',
        level: 5,
        xp: 480,
        emote: 'victory'
      }
    },
    owl_scholar: {
      name: 'Búho Sabio',
      icon: '🦉',
      desc: 'Birrete de graduación y gafas intelectuales.',
      config: {
        animal: 'owl',
        alias: 'DrOwl',
        title: 'Maestro del Saber',
        themeColor: 'default',
        headwear: 'grad_hat',
        headwearColor: '#1e293b',
        eyewear: 'nerd_glasses',
        eyewearColor: '#6366f1',
        outfit: 'scarf',
        outfitColor: '#4f46e5',
        expression: 'focused',
        stageBg: 'chill_lab',
        level: 4,
        xp: 320,
        emote: 'focus'
      }
    },
    cyber_wolf: {
      name: 'Lobo Cyber',
      icon: '🐺',
      desc: 'Visor holográfico futurista y armadura neón.',
      config: {
        animal: 'wolf',
        alias: 'NeonWolf',
        title: 'Hacker del Saber',
        themeColor: 'cyber_purple',
        headwear: 'none',
        eyewear: 'cyber_visor',
        eyewearColor: '#00f5d4',
        outfit: 'hoodie',
        outfitColor: '#7928ca',
        expression: 'cool',
        stageBg: 'matrix_neon',
        level: 3,
        xp: 240,
        emote: 'wave'
      }
    },
    unicorn_magic: {
      name: 'Unicornio Mágico',
      icon: '🦄',
      desc: 'Gorro de fiesta y estrellas en los ojos.',
      config: {
        animal: 'unicorn',
        alias: 'Starlight',
        title: 'Cerebro Neón',
        themeColor: 'default',
        headwear: 'party_hat',
        headwearColor: '#ff007f',
        eyewear: 'none',
        outfit: 'bow',
        outfitColor: '#ec4899',
        expression: 'star_eyes',
        stageBg: 'cyber_arcade',
        level: 3,
        xp: 210,
        emote: 'dance'
      }
    }
  },

  // Fondos de escenario virtual
  stageBackgrounds: {
    matrix_neon: {
      name: 'Matriz Neón',
      icon: '🌌',
      css: 'radial-gradient(circle at 50% 30%, rgba(0, 245, 212, 0.25) 0%, rgba(5, 10, 26, 0.95) 75%), linear-gradient(180deg, #050b1a 0%, #030712 100%)'
    },
    cyber_arcade: {
      name: 'Arcade Retro',
      icon: '🕹️',
      css: 'radial-gradient(circle at 50% 30%, rgba(255, 0, 127, 0.25) 0%, rgba(20, 5, 30, 0.95) 75%), linear-gradient(180deg, #180324 0%, #08010d 100%)'
    },
    space_station: {
      name: 'Estación Espacial',
      icon: '🛸',
      css: 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.3) 0%, rgba(7, 18, 48, 0.95) 75%), linear-gradient(180deg, #091a3c 0%, #020617 100%)'
    },
    gamer_arena: {
      name: 'Arena eSports',
      icon: '🏆',
      css: 'radial-gradient(circle at 50% 25%, rgba(245, 158, 11, 0.3) 0%, rgba(30, 15, 5, 0.95) 80%), linear-gradient(180deg, #1c0e04 0%, #0a0401 100%)'
    },
    chill_lab: {
      name: 'Laboratorio Zen',
      icon: '🧪',
      css: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.3) 0%, rgba(15, 10, 35, 0.95) 80%), linear-gradient(180deg, #1e1338 0%, #070312 100%)'
    }
  },

  // Emotes y gestos
  emotes: {
    idle: { name: 'Respiración / Espera', icon: '🧘', desc: 'Postura base de juego' },
    wave: { name: 'Saludar', icon: '👋', desc: 'Saludo amistoso con la pata' },
    celebrate: { name: 'Celebrar', icon: '🎉', desc: 'Salto eufórico con orejas contentas' },
    dance: { name: 'Bailar', icon: '💃', desc: 'Paso de baile al ritmo gamer' },
    laugh: { name: 'Reír', icon: '😂', desc: 'Carcajada alegre' },
    victory: { name: 'Pose Victoria', icon: '✌️', desc: 'Señal de triunfo con destello dorado' },
    focus: { name: 'Concentración', icon: '🧠', desc: 'Modo ultra instinto' },
    clap: { name: 'Aplaudir', icon: '👏', desc: 'Aplausos de ánimo' }
  },

  // Títulos decorativos
  titles: [
    { name: 'Novato Curioso', xpReq: 0, icon: '🌱' },
    { name: 'Gamer Pro', xpReq: 50, icon: '🎮' },
    { name: 'Cerebro Neón', xpReq: 120, icon: '⚡' },
    { name: 'Velocidad Rayo', xpReq: 200, icon: '⚡' },
    { name: 'Maestro del Saber', xpReq: 300, icon: '🎓' },
    { name: 'Hacker del Saber', xpReq: 420, icon: '💻' },
    { name: 'Leyenda de la Sala', xpReq: 550, icon: '👑' }
  ],

  // Paleta de temas de color de pelaje
  themeColorMap: {
    default: null,
    neon_cyan: { primary: '#00f5d4', secondary: '#ffffff' },
    pink_punk: { primary: '#ff007f', secondary: '#ffffff' },
    cyber_purple: { primary: '#a855f7', secondary: '#ffffff' },
    golden: { primary: '#ffd166', secondary: '#fff3b0' },
    midnight: { primary: '#1e293b', secondary: '#475569' },
    arctic_white: { primary: '#f8fafc', secondary: '#cbd5e1' },
    emerald: { primary: '#10b981', secondary: '#d1fae5' }
  },

  // Recuperar avatar guardado
  getSavedAvatar() {
    try {
      const raw = localStorage.getItem('mentix_player_avatar');
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...this.defaultConfig, ...parsed };
      }
    } catch (e) {
      console.warn('Error recuperando avatar:', e);
    }
    return { ...this.defaultConfig };
  },

  // Guardar avatar
  saveAvatar(config) {
    try {
      const merged = { ...this.getSavedAvatar(), ...config };
      localStorage.setItem('mentix_player_avatar', JSON.stringify(merged));
      if (window.realtimeEngine && window.realtimeEngine.localPlayer) {
        window.realtimeEngine.localPlayer.avatarConfig = merged;
        window.realtimeEngine.localPlayer.avatar = this.getAvatarEmoji(merged.animal);
        window.realtimeEngine.localPlayer.nickname = merged.alias || window.realtimeEngine.localPlayer.nickname;
      }
      return merged;
    } catch (e) {
      console.warn('Error guardando avatar:', e);
      return config;
    }
  },

  getAvatarEmoji(animalKey) {
    return this.animals[animalKey]?.icon || '🦊';
  },

  awardXP(amount, reason = '') {
    const cur = this.getSavedAvatar();
    const prevXP = cur.xp || 0;
    const newXP = prevXP + amount;
    const newLevel = Math.floor(newXP / 100) + 1;
    const leveledUp = newLevel > (cur.level || 1);

    let newTitle = cur.title || 'Novato Curioso';
    for (const t of this.titles) {
      if (newXP >= t.xpReq) newTitle = t.name;
    }

    const updated = this.saveAvatar({
      xp: newXP,
      level: newLevel,
      title: newTitle
    });

    if (window.soundEngine && amount > 0) {
      if (leveledUp) {
        window.soundEngine.playFanfare();
      } else {
        window.soundEngine.playTick();
      }
    }

    window.dispatchEvent(new CustomEvent('mentix_avatar_xp_updated', {
      detail: { xp: newXP, level: newLevel, title: newTitle, added: amount, reason, leveledUp }
    }));

    return updated;
  },

  // =========================================================================
  // 🏷️ RENDERIZADO DEL BADGE / PILL OFICIAL ESTILO KAHOOT: [ 🦊 Eimy  NIV. 3 ]
  // =========================================================================
  renderBadgeHTML(playerOrConfig, options = {}) {
    const cfg = playerOrConfig?.avatarConfig || playerOrConfig || this.defaultConfig;
    const name = playerOrConfig?.nickname || cfg.alias || 'Eimy';
    const level = playerOrConfig?.level || cfg.level || 3;
    const isReady = playerOrConfig?.isReady;
    const size = options.size || 28;

    return `
      <div class="kahoot-player-badge-pill ${isReady ? 'is-ready' : ''}" style="cursor: pointer;">
        <div class="kahoot-pill-avatar-wrap">
          ${this.renderIconSVG(cfg, size)}
        </div>
        <span class="kahoot-pill-name">${name}</span>
        <span class="kahoot-pill-level-tag">NIV. ${level}</span>
        ${isReady !== undefined ? `
          <span style="font-size: 0.72rem; margin-left: 0.15rem;">${isReady ? '🟢' : '✏️'}</span>
        ` : ''}
      </div>
    `;
  },

  // =========================================================================
  // 🖼️ PERSONAJES ILUSTRADOS (sprites estilo Kahoot bonito y animado)
  // =========================================================================
  spriteAnimals: ['fox', 'panda', 'cat', 'dog', 'lion', 'rabbit', 'koala', 'owl', 'monkey', 'bear', 'wolf', 'tiger'],

  // Posición de la cabeza en cada sprite (lienzo 240x260): cx = centro, ey = altura de ojos, hs = escala de cabeza
  spriteMeta: {
    fox:    { cx: 102, ey: 98,  hs: 1.75 },
    panda:  { cx: 120, ey: 88,  hs: 1.7 },
    cat:    { cx: 99,  ey: 95,  hs: 1.55 },
    dog:    { cx: 120, ey: 83,  hs: 1.45 },
    lion:   { cx: 120, ey: 105, hs: 1.35 },
    rabbit: { cx: 119, ey: 118, hs: 1.35 },
    koala:  { cx: 120, ey: 96,  hs: 1.45 },
    owl:    { cx: 120, ey: 82,  hs: 1.65 },
    monkey: { cx: 119, ey: 103, hs: 1.45 },
    bear:   { cx: 120, ey: 98,  hs: 1.65 },
    wolf:   { cx: 106, ey: 100, hs: 1.7 },
    tiger:  { cx: 109, ey: 89,  hs: 1.7 }
  },

  // Colores especiales: se aplican como tinte sobre el sprite
  themeFilterCss(themeColor) {
    const map = {
      neon_cyan: 'hue-rotate(150deg) saturate(1.4)',
      pink_punk: 'hue-rotate(305deg) saturate(1.3)',
      cyber_purple: 'hue-rotate(245deg) saturate(1.3)',
      golden: 'hue-rotate(18deg) saturate(1.5) brightness(1.12)',
      midnight: 'brightness(0.62) saturate(0.8) contrast(1.1)',
      arctic_white: 'saturate(0.25) brightness(1.25)',
      emerald: 'hue-rotate(95deg) saturate(1.3)'
    };
    return map[themeColor] ? `filter:${map[themeColor]};` : '';
  },

  renderSpriteAvatar(c, animal, emote, size, uniqueId) {
    const meta = this.spriteMeta[animal] || { cx: 120, ey: 98, hs: 1.6 };
    const { cx, ey, hs } = meta;
    const k = hs / 1.7;
    const neckY = ey + 38 * hs;

    let emoteClass = 'anim-breathing';
    if (emote === 'wave') emoteClass = 'anim-wave';
    else if (emote === 'celebrate') emoteClass = 'anim-celebrate';
    else if (emote === 'dance') emoteClass = 'anim-dance';
    else if (emote === 'laugh') emoteClass = 'anim-laugh';
    else if (emote === 'victory') emoteClass = 'anim-victory';
    else if (emote === 'focus') emoteClass = 'anim-focus';
    else if (emote === 'clap') emoteClass = 'anim-clap';

    const col = c.outfitColor || '#7928ca';
    let behind = '';
    let front = '';
    switch (c.outfit) {
      case 'cape':
        behind = `<path d="M${cx - 38 * k} ${neckY} L${cx + 38 * k} ${neckY} L${cx + 62 * k} ${neckY + 82 * k} L${cx - 62 * k} ${neckY + 82 * k} Z" fill="${col}" stroke="#3b1d0e" stroke-width="2.5" stroke-linejoin="round"/>`;
        front = `<circle cx="${cx}" cy="${neckY + 6}" r="${5 * k}" fill="#ffd166" stroke="#3b1d0e" stroke-width="1.8"/>`;
        break;
      case 'hoodie':
        front = `<rect x="${cx - 34 * k}" y="${neckY + 4}" width="${68 * k}" height="${56 * k}" rx="${16 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="2.5" opacity="0.94"/>
                 <rect x="${cx - 20 * k}" y="${neckY + 34 * k}" width="${40 * k}" height="${18 * k}" rx="${6 * k}" fill="rgba(0,0,0,0.2)"/>
                 <line x1="${cx - 7 * k}" y1="${neckY + 8}" x2="${cx - 7 * k}" y2="${neckY + 28 * k}" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
                 <line x1="${cx + 7 * k}" y1="${neckY + 8}" x2="${cx + 7 * k}" y2="${neckY + 28 * k}" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>`;
        break;
      case 'bowtie':
        front = `<polygon points="${cx - 2},${neckY + 4} ${cx - 20 * k},${neckY - 6 * k} ${cx - 20 * k},${neckY + 14 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="1.8"/>
                 <polygon points="${cx + 2},${neckY + 4} ${cx + 20 * k},${neckY - 6 * k} ${cx + 20 * k},${neckY + 14 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="1.8"/>
                 <circle cx="${cx}" cy="${neckY + 4}" r="${5 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="1.5"/>`;
        break;
      case 'scarf':
        front = `<rect x="${cx - 34 * k}" y="${neckY - 6 * k}" width="${68 * k}" height="${15 * k}" rx="${7 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="2.4"/>
                 <rect x="${cx + 12 * k}" y="${neckY + 4 * k}" width="${14 * k}" height="${30 * k}" rx="${5 * k}" fill="${col}" stroke="#3b1d0e" stroke-width="2.2"/>`;
        break;
      case 'medal':
        front = `<polygon points="${cx - 12 * k},${neckY - 2} ${cx},${neckY + 26 * k} ${cx - 22 * k},${neckY + 2}" fill="#3b82f6"/>
                 <polygon points="${cx + 12 * k},${neckY - 2} ${cx},${neckY + 26 * k} ${cx + 22 * k},${neckY + 2}" fill="#ef4444"/>
                 <circle cx="${cx}" cy="${neckY + 34 * k}" r="${11 * k}" fill="#ffd166" stroke="#3b1d0e" stroke-width="2"/>
                 <circle cx="${cx}" cy="${neckY + 34 * k}" r="${7 * k}" fill="#f59e0b"/>`;
        break;
      default:
        break;
    }

    const headwearSvg = this.generateHeadwearSVG(c.headwear, c.headwearColor);
    const eyewearSvg = this.generateEyewearSVG(c.eyewear, c.eyewearColor);
    const tx = cx - 60 * hs;
    const ty = ey - 62 * hs;

    return `
      <div class="mentix-avatar-wrapper" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; position: relative;">
        <svg id="${uniqueId}" class="mentix-avatar-svg sprite-avatar ${emoteClass}" viewBox="0 0 240 260" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: drop-shadow(0 8px 12px rgba(0,0,0,0.35));">
          ${behind}
          <image href="assets/sprites/${animal}.png" x="0" y="0" width="240" height="260" style="${this.themeFilterCss(c.themeColor)}" />
          ${front}
          <g transform="translate(${tx.toFixed(1)}, ${ty.toFixed(1)}) scale(${hs})">
            ${eyewearSvg}
            ${headwearSvg}
          </g>
        </svg>
      </div>
    `;
  },

  // Renderiza solo el icono de cabeza vectorial compacto para pills y listas
  renderIconSVG(cfg, size = 32) {
    const c = { ...this.defaultConfig, ...(cfg || {}) };
    const animal = c.animal || 'fox';
    if (this.spriteAnimals.includes(animal)) {
      return `<span style="display:inline-block;width:${size}px;height:${size}px;vertical-align:middle;background:url('assets/sprites/${animal}.png') center / contain no-repeat;${this.themeFilterCss(c.themeColor)}"></span>`;
    }
    const uniqueId = 'head_' + Math.random().toString(36).substr(2, 6);

    const theme = this.themeColorMap[c.themeColor];
    const baseAnimal = this.animals[animal] || this.animals.fox;
    const primary = theme?.primary || baseAnimal.primaryColor;
    const secondary = theme?.secondary || baseAnimal.secondaryColor;

    const headSvg = this.generateHeadSVG(animal, primary, secondary, c.expression);
    const headwearSvg = this.generateHeadwearSVG(c.headwear, c.headwearColor);
    const eyewearSvg = this.generateEyewearSVG(c.eyewear, c.eyewearColor);

    return `
      <svg viewBox="0 0 120 120" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <g id="${uniqueId}">
          ${headSvg}
          ${eyewearSvg}
          ${headwearSvg}
        </g>
      </svg>
    `;
  },

  // =========================================================================
  // 🎨 MOTOR PROCEDURAL VECTORIAL COMPLETO CON ROTACIÓN 3D Y GESTOS
  // =========================================================================
  renderSVG(cfg, options = {}) {
    const c = { ...this.defaultConfig, ...(cfg || {}) };
    const size = options.size || 250;
    const emote = options.emote || c.emote || 'idle';
    const animal = c.animal || 'fox';
    const uniqueId = 'av_' + Math.random().toString(36).substr(2, 6);

    const theme = this.themeColorMap[c.themeColor];
    const baseAnimal = this.animals[animal] || this.animals.fox;
    const primary = theme?.primary || baseAnimal.primaryColor;
    const secondary = theme?.secondary || baseAnimal.secondaryColor;

    let emoteClass = 'anim-breathing';

    // Animales con arte ilustrado (sprites): se dibujan con el estilo bonito y animado
    if (this.spriteAnimals.includes(animal)) {
      return this.renderSpriteAvatar(c, animal, emote, size, uniqueId);
    }
    if (emote === 'wave') emoteClass = 'anim-wave';
    else if (emote === 'celebrate') emoteClass = 'anim-celebrate';
    else if (emote === 'dance') emoteClass = 'anim-dance';
    else if (emote === 'laugh') emoteClass = 'anim-laugh';
    else if (emote === 'victory') emoteClass = 'anim-victory';
    else if (emote === 'focus') emoteClass = 'anim-focus';
    else if (emote === 'clap') emoteClass = 'anim-clap';

    const headSvg = this.generateHeadSVG(animal, primary, secondary, c.expression);
    const headwearSvg = this.generateHeadwearSVG(c.headwear, c.headwearColor);
    const eyewearSvg = this.generateEyewearSVG(c.eyewear, c.eyewearColor);
    const outfitSvg = this.generateOutfitSVG(c.outfit, c.outfitColor, primary, secondary, animal);
    const armsSvg = this.generateArmsSVG(emote, primary);
    const tailSvg = this.generateTailSVG(animal, primary, secondary);
    const legsSvg = this.generateLegsSVG(primary, animal);

    return `
      <div class="mentix-avatar-wrapper" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; position: relative;">
        <svg 
          id="${uniqueId}" 
          class="mentix-avatar-svg ${emoteClass}" 
          viewBox="0 0 240 260" 
          width="${size}" 
          height="${size}" 
          xmlns="http://www.w3.org/2000/svg"
          style="filter: drop-shadow(0 10px 18px rgba(0,0,0,0.5)); overflow: visible;"
        >
          <defs>
            <radialGradient id="shadow_${uniqueId}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="rgba(0,0,0,0.45)" />
              <stop offset="100%" stop-color="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          <!-- Sombra proyectada en el suelo -->
          <ellipse cx="120" cy="242" rx="58" ry="10" fill="url(#shadow_${uniqueId})" />

          <!-- Cola, piernas, cuerpo y brazos -->
          ${tailSvg}
          ${legsSvg}
          <g class="avatar-body-group">
            ${outfitSvg}
            ${armsSvg}
          </g>

          <!-- Cabeza grande estilo chibi -->
          <g transform="translate(51, 8) scale(1.15)">
            ${headSvg}
            ${eyewearSvg}
            ${headwearSvg}
          </g>
        </svg>
      </div>
    `;
  },

  // Genera la cabeza específica de cada animal estilo Kahoot
  generateHeadSVG(animal, primary, secondary, expression) {
    let eyesSvg = '';
    switch (expression) {
      case 'wink':
        eyesSvg = `
          <!-- Ojo izquierdo normal -->
          <ellipse cx="44" cy="62" rx="4.5" ry="6.5" fill="#111111" />
          <circle cx="42.5" cy="60" r="1.8" fill="#ffffff" />
          <!-- Ojo derecho guiño -->
          <path d="M70 63 Q76 57 82 63" stroke="#111111" stroke-width="3" fill="none" stroke-linecap="round"/>
        `;
        break;
      case 'star_eyes':
        eyesSvg = `
          <!-- Ojos de estrellas emocionadas -->
          <polygon points="44,54 46,60 52,61 47,65 49,71 44,67 39,71 41,65 36,61 42,60" fill="#ffd166" stroke="#111" stroke-width="1"/>
          <polygon points="76,54 78,60 84,61 79,65 81,71 76,67 71,71 73,65 68,61 74,60" fill="#ffd166" stroke="#111" stroke-width="1"/>
        `;
        break;
      case 'cool':
        eyesSvg = `
          <ellipse cx="44" cy="62" rx="4.5" ry="6" fill="#111111" />
          <circle cx="42.5" cy="60" r="1.8" fill="#ffffff" />
          <ellipse cx="76" cy="62" rx="4.5" ry="6" fill="#111111" />
          <circle cx="74.5" cy="60" r="1.8" fill="#ffffff" />
          <!-- Cejas pro -->
          <path d="M38 52 L50 55" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M82 52 L70 55" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
        `;
        break;
      case 'focused':
        eyesSvg = `
          <ellipse cx="45" cy="63" rx="4" ry="5.5" fill="#111111" />
          <ellipse cx="75" cy="63" rx="4" ry="5.5" fill="#111111" />
          <path d="M38 54 L52 57" stroke="#111" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M82 54 L68 57" stroke="#111" stroke-width="2.8" stroke-linecap="round"/>
        `;
        break;
      case 'happy':
      default:
        eyesSvg = `
          <ellipse cx="44" cy="62" rx="4.5" ry="6.5" fill="#111111" />
          <circle cx="42.5" cy="60" r="1.8" fill="#ffffff" />
          <ellipse cx="76" cy="62" rx="4.5" ry="6.5" fill="#111111" />
          <circle cx="74.5" cy="60" r="1.8" fill="#ffffff" />
        `;
    }

    switch (animal) {
      // 1. Zorro / Fox (Exacto como en la captura del usuario!)
      case 'fox':
        return `
          <!-- Orejas triangulares con puntas negras y centro blanco -->
          <polygon points="26,18 48,58 14,50" fill="${primary}" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
          <polygon points="26,18 36,38 20,34" fill="#111111" />
          <polygon points="28,28 44,55 20,49" fill="${secondary}" />

          <polygon points="94,18 106,50 72,58" fill="${primary}" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
          <polygon points="94,18 100,34 84,38" fill="#111111" />
          <polygon points="92,28 100,49 76,55" fill="${secondary}" />

          <!-- Cabeza base naranja del zorro -->
          <path d="M28 52 Q60 36 92 52 Q102 78 92 98 Q60 124 28 98 Q18 78 28 52 Z" fill="${primary}" stroke="#111" stroke-width="2.8" stroke-linejoin="round"/>

          <!-- Mejillas blancas flanqueadas hacia afuera (estilo exacto del pantallazo) -->
          <path d="M22 78 Q12 88 24 98 Q42 110 60 120 Q78 110 96 98 Q108 88 98 78 Q84 90 60 92 Q36 90 22 78 Z" fill="${secondary}" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>

          <!-- Hocico blanco central -->
          <path d="M48 82 Q60 76 72 82 Q72 104 60 120 Q48 104 48 82 Z" fill="${secondary}" />

          <!-- Ojos -->
          ${eyesSvg}

          <!-- Nariz de botón negro -->
          <path d="M56 102 Q60 99 64 102 Q64 108 60 109 Q56 108 56 102 Z" fill="#111111" />
          <line x1="60" y1="109" x2="60" y2="114" stroke="#111" stroke-width="1.8" />
        `;

      // 2. Panda
      case 'panda':
        return `
          <!-- Orejas negras redondas -->
          <circle cx="28" cy="38" r="16" fill="#1a1a1a" stroke="#111" stroke-width="2.5" />
          <circle cx="92" cy="38" r="16" fill="#1a1a1a" stroke="#111" stroke-width="2.5" />

          <!-- Cabeza blanca redonda -->
          <ellipse cx="60" cy="74" rx="42" ry="38" fill="${primary}" stroke="#111" stroke-width="2.8" />

          <!-- Manchas negras ovaladas en los ojos -->
          <ellipse cx="44" cy="70" rx="12" ry="15" fill="#1a1a1a" transform="rotate(-15 44 70)" />
          <ellipse cx="76" cy="70" rx="12" ry="15" fill="#1a1a1a" transform="rotate(15 76 70)" />

          <!-- Ojos con brillo blanco -->
          <ellipse cx="44" cy="70" rx="4.5" ry="6" fill="#ffffff" />
          <circle cx="44" cy="70" r="3" fill="#111111" />
          <circle cx="43" cy="68" r="1.2" fill="#ffffff" />

          <ellipse cx="76" cy="70" rx="4.5" ry="6" fill="#ffffff" />
          <circle cx="76" cy="70" r="3" fill="#111111" />
          <circle cx="75" cy="68" r="1.2" fill="#ffffff" />

          <!-- Nariz y boca panda -->
          <ellipse cx="60" cy="88" rx="6" ry="4.5" fill="#111111" />
          <path d="M54 94 Q60 99 66 94" stroke="#111" stroke-width="2" fill="none" stroke-linecap="round"/>
        `;

      // 3. Gato / Cat
      case 'cat':
        return `
          <!-- Orejas triangulares felinas -->
          <polygon points="26,24 48,56 18,52" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="28,32 44,52 24,49" fill="#f472b6" />

          <polygon points="94,24 102,52 72,56" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="92,32 96,49 76,52" fill="#f472b6" />

          <!-- Cabeza del gato -->
          <ellipse cx="60" cy="72" rx="42" ry="36" fill="${primary}" stroke="#111" stroke-width="2.8"/>
          <!-- Hocico blanco -->
          <ellipse cx="53" cy="85" rx="10" ry="7" fill="${secondary}" />
          <ellipse cx="67" cy="85" rx="10" ry="7" fill="${secondary}" />

          ${eyesSvg}

          <!-- Nariz rosada y boca -->
          <polygon points="57,80 63,80 60,85" fill="#f472b6" />
          <path d="M53 88 Q60 92 67 88" stroke="#111" stroke-width="1.8" fill="none"/>

          <!-- Bigotes -->
          <line x1="22" y1="80" x2="38" y2="83" stroke="#111" stroke-width="1.6"/>
          <line x1="22" y1="88" x2="38" y2="87" stroke="#111" stroke-width="1.6"/>
          <line x1="98" y1="80" x2="82" y2="83" stroke="#111" stroke-width="1.6"/>
          <line x1="98" y1="88" x2="82" y2="87" stroke="#111" stroke-width="1.6"/>
        `;

      // 4. Perro / Pug
      case 'dog':
        return `
          <!-- Orejas caídas suaves -->
          <path d="M22 46 C12 60 16 88 28 84 C34 76 34 56 30 46 Z" fill="#78350f" stroke="#111" stroke-width="2.5"/>
          <path d="M98 46 C108 60 104 88 92 84 C86 76 86 56 90 46 Z" fill="#78350f" stroke="#111" stroke-width="2.5"/>

          <!-- Cabeza redonda -->
          <ellipse cx="60" cy="72" rx="40" ry="38" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Mancha oscura del hocico -->
          <ellipse cx="60" cy="86" rx="20" ry="15" fill="#451a03" />

          ${eyesSvg}

          <!-- Nariz negra y lengua simpática -->
          <ellipse cx="60" cy="82" rx="7" ry="5" fill="#111111" />
          <path d="M54 88 Q60 94 66 88" stroke="#111" stroke-width="2" fill="none"/>
          <path d="M58 92 C58 100 62 100 62 92 Z" fill="#f43f5e" />
        `;

      // 5. León
      case 'lion':
        return `
          <!-- Melena majestuosa circular -->
          <circle cx="60" cy="72" r="48" fill="${secondary}" stroke="#111" stroke-width="3"/>
          <circle cx="34" cy="42" r="12" fill="${secondary}" />
          <circle cx="86" cy="42" r="12" fill="${secondary}" />

          <!-- Cara del león -->
          <ellipse cx="60" cy="74" rx="34" ry="32" fill="${primary}" stroke="#111" stroke-width="2.5"/>

          <!-- Orejas -->
          <circle cx="36" cy="50" r="9" fill="${primary}" stroke="#111" stroke-width="2"/>
          <circle cx="84" cy="50" r="9" fill="${primary}" stroke="#111" stroke-width="2"/>

          <!-- Hocico y nariz -->
          <ellipse cx="60" cy="86" rx="14" ry="10" fill="#ffffff" />
          <polygon points="56,80 64,80 60,86" fill="#b45309" />
          <path d="M54 90 Q60 94 66 90" stroke="#111" stroke-width="2" fill="none"/>

          ${eyesSvg}
        `;

      // 6. Conejo / Rabbit
      case 'rabbit':
        return `
          <!-- Orejas largas verticales con interior rosa -->
          <ellipse cx="38" cy="24" rx="10" ry="26" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <ellipse cx="38" cy="24" rx="5" ry="18" fill="#f472b6" />

          <ellipse cx="82" cy="24" rx="10" ry="26" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <ellipse cx="82" cy="24" rx="5" ry="18" fill="#f472b6" />

          <!-- Cabeza -->
          <ellipse cx="60" cy="76" rx="38" ry="34" fill="${primary}" stroke="#111" stroke-width="2.8"/>
          <!-- Mejillas rosadas -->
          <circle cx="32" cy="80" r="6" fill="#fbcfe8" />
          <circle cx="88" cy="80" r="6" fill="#fbcfe8" />

          <!-- Dientes de conejo -->
          <rect x="57" y="93" width="6" height="6" rx="1" fill="#ffffff" stroke="#111" stroke-width="1.2"/>

          <!-- Nariz rosa y boca -->
          <polygon points="57,84 63,84 60,88" fill="#ec4899" />
          <path d="M54 91 Q60 94 66 91" stroke="#111" stroke-width="1.8" fill="none"/>

          ${eyesSvg}
        `;

      // 7. Koala
      case 'koala':
        return `
          <!-- Orejas grandes y peludas -->
          <circle cx="22" cy="52" r="20" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <circle cx="22" cy="52" r="12" fill="${secondary}" />

          <circle cx="98" cy="52" r="20" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <circle cx="98" cy="52" r="12" fill="${secondary}" />

          <!-- Cabeza -->
          <ellipse cx="60" cy="74" rx="40" ry="35" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Gran nariz ovalada clásica de koala -->
          <ellipse cx="60" cy="80" rx="12" ry="16" fill="#1e293b" />
          <ellipse cx="58" cy="74" rx="3.5" ry="5" fill="rgba(255,255,255,0.25)" />

          ${eyesSvg}
        `;

      // 8. Búho / Owl
      case 'owl':
        return `
          <!-- Plumitas de las orejas -->
          <polygon points="34,36 46,52 26,50" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="86,36 94,50 74,52" fill="${primary}" stroke="#111" stroke-width="2.5"/>

          <!-- Cabeza redondeada -->
          <ellipse cx="60" cy="72" rx="40" ry="38" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Grandes círculos de ojos de búho inteligente -->
          <circle cx="44" cy="68" r="17" fill="#ffffff" stroke="#111" stroke-width="2.5"/>
          <circle cx="76" cy="68" r="17" fill="#ffffff" stroke="#111" stroke-width="2.5"/>

          <circle cx="44" cy="68" r="9" fill="${secondary}" />
          <circle cx="76" cy="68" r="9" fill="${secondary}" />

          <circle cx="44" cy="68" r="5" fill="#111111" />
          <circle cx="76" cy="68" r="5" fill="#111111" />
          <circle cx="42" cy="66" r="1.8" fill="#ffffff" />
          <circle cx="74" cy="66" r="1.8" fill="#ffffff" />

          <!-- Pico dorado -->
          <polygon points="57,76 63,76 60,86" fill="#f59e0b" stroke="#111" stroke-width="1.8"/>
        `;

      // 9. Mono / Monkey
      case 'monkey':
        return `
          <!-- Orejas redondas laterales -->
          <circle cx="18" cy="70" r="16" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <circle cx="18" cy="70" r="9" fill="${secondary}" />

          <circle cx="102" cy="70" r="16" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <circle cx="102" cy="70" r="9" fill="${secondary}" />

          <!-- Cabeza -->
          <circle cx="60" cy="70" r="38" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Máscara de cara clara -->
          <path d="M36 65 C36 50 50 48 60 58 C70 48 84 50 84 65 C84 85 75 92 60 92 C45 92 36 85 36 65 Z" fill="${secondary}" />

          ${eyesSvg}

          <circle cx="56" cy="78" r="1.8" fill="#111" />
          <circle cx="64" cy="78" r="1.8" fill="#111" />
          <path d="M50 84 Q60 90 70 84" stroke="#111" stroke-width="2" fill="none" stroke-linecap="round"/>
        `;

      // 10. Lobo / Wolf
      case 'wolf':
        return `
          <!-- Orejas afiladas de lobo -->
          <polygon points="26,18 46,54 18,48" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="28,26 42,50 22,46" fill="${secondary}" />

          <polygon points="94,18 102,48 74,54" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="92,26 98,46 78,50" fill="${secondary}" />

          <!-- Cabeza con mechones laterales -->
          <path d="M28 50 Q60 38 92 50 L98 74 L88 78 L96 92 L76 102 L60 114 L44 102 L24 92 L32 78 L22 74 Z" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <path d="M38 78 Q60 90 82 78 L60 112 Z" fill="${secondary}" />

          ${eyesSvg}

          <polygon points="56,92 64,92 60,98" fill="#111111" />
        `;

      // 11. Pingüino
      case 'penguin':
        return `
          <!-- Cabeza de pingüino negro y máscara blanca -->
          <ellipse cx="60" cy="72" rx="38" ry="40" fill="${primary}" stroke="#111" stroke-width="2.8"/>
          <!-- Cara blanca corazón -->
          <path d="M32 68 C32 48 48 48 60 60 C72 48 88 48 88 68 C88 95 76 104 60 104 C44 104 32 95 32 68 Z" fill="${secondary}" />

          ${eyesSvg}

          <!-- Pico naranja brillante -->
          <polygon points="53,78 67,78 60,90" fill="#f97316" stroke="#111" stroke-width="2"/>
        `;

      // 12. Unicornio
      case 'unicorn':
        return `
          <!-- Cuerno dorado en espiral mágico -->
          <polygon points="60,6 54,42 66,42" fill="${secondary}" stroke="#111" stroke-width="2"/>
          <line x1="56" y1="30" x2="64" y2="24" stroke="#d97706" stroke-width="1.8"/>
          <line x1="57" y1="18" x2="63" y2="14" stroke="#d97706" stroke-width="1.8"/>

          <!-- Orejas -->
          <polygon points="32,24 48,50 24,46" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <polygon points="88,24 96,46 72,50" fill="${primary}" stroke="#111" stroke-width="2.5"/>

          <!-- Cabeza -->
          <ellipse cx="60" cy="72" rx="36" ry="34" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Mechones de melena pastel -->
          <path d="M42 38 Q50 22 58 36" stroke="#a855f7" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M62 38 Q70 22 78 36" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round"/>

          ${eyesSvg}

          <!-- Hocico -->
          <ellipse cx="60" cy="90" rx="14" ry="10" fill="#fdf2f8" />
          <circle cx="56" cy="88" r="1.8" fill="#111" />
          <circle cx="64" cy="88" r="1.8" fill="#111" />
        `;

      // 13. Robot
      case 'robot':
        return `
          <!-- Antena con foco de luz -->
          <line x1="60" y1="34" x2="60" y2="16" stroke="#111" stroke-width="3" />
          <circle cx="60" cy="14" r="7" fill="#00f5d4" stroke="#111" stroke-width="2"/>

          <!-- Orejas / Tornillos laterales -->
          <rect x="14" y="62" width="10" height="18" rx="3" fill="#64748b" stroke="#111" stroke-width="2"/>
          <rect x="96" y="62" width="10" height="18" rx="3" fill="#64748b" stroke="#111" stroke-width="2"/>

          <!-- Cabeza metálica redondeada -->
          <rect x="24" y="34" width="72" height="66" rx="14" fill="${primary}" stroke="#111" stroke-width="2.8"/>

          <!-- Pantalla visor ocular -->
          <rect x="34" y="48" width="52" height="26" rx="8" fill="#030712" stroke="#00f5d4" stroke-width="2"/>
          <line x1="38" y1="61" x2="82" y2="61" stroke="#00f5d4" stroke-width="3" stroke-linecap="round"/>
          <circle cx="48" cy="61" r="3.5" fill="#00f5d4" />
          <circle cx="72" cy="61" r="3.5" fill="#00f5d4" />

          <!-- Rejilla de boca -->
          <rect x="44" y="82" width="32" height="8" rx="3" fill="#1e293b" />
          <line x1="52" y1="82" x2="52" y2="90" stroke="#00f5d4" stroke-width="1.5"/>
          <line x1="60" y1="82" x2="60" y2="90" stroke="#00f5d4" stroke-width="1.5"/>
          <line x1="68" y1="82" x2="68" y2="90" stroke="#00f5d4" stroke-width="1.5"/>
        `;

      // Default / Tigre / Oso
      default:
        return `
          <circle cx="28" cy="40" r="14" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <circle cx="92" cy="40" r="14" fill="${primary}" stroke="#111" stroke-width="2.5"/>
          <ellipse cx="60" cy="72" rx="40" ry="36" fill="${primary}" stroke="#111" stroke-width="2.8"/>
          <ellipse cx="60" cy="85" rx="16" ry="12" fill="${secondary}" />
          ${eyesSvg}
          <polygon points="56,80 64,80 60,86" fill="#111" />
        `;
    }
  },

  // Gorros y accesorios para la cabeza
  generateHeadwearSVG(headwear, color = '#00f5d4') {
    switch (headwear) {
      case 'headphones':
        return `
          <path d="M18 64 C12 24 108 24 102 64" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
          <rect x="12" y="56" width="12" height="24" rx="6" fill="#111" stroke="${color}" stroke-width="2"/>
          <rect x="96" y="56" width="12" height="24" rx="6" fill="#111" stroke="${color}" stroke-width="2"/>
          <circle cx="18" cy="68" r="3" fill="${color}" />
          <circle cx="102" cy="68" r="3" fill="${color}" />
        `;
      case 'gamer_cap':
        return `
          <path d="M26 44 Q60 22 94 44 Z" fill="${color}" stroke="#111" stroke-width="2.5"/>
          <path d="M78 44 Q114 42 120 50 Q100 48 76 46 Z" fill="#0f172a" stroke="#111" stroke-width="2"/>
          <circle cx="60" cy="30" r="3" fill="#ffffff" />
        `;
      case 'party_hat':
        return `
          <polygon points="60,2 42,42 78,42" fill="${color}" stroke="#111" stroke-width="2.5"/>
          <circle cx="60" cy="2" r="6" fill="#ffd166" />
          <line x1="48" y1="28" x2="72" y2="28" stroke="#ffffff" stroke-width="2.5"/>
          <line x1="52" y1="16" x2="68" y2="16" stroke="#ffffff" stroke-width="2.5"/>
        `;
      case 'crown':
        return `
          <polygon points="34,44 40,24 50,36 60,18 70,36 80,24 86,44" fill="#ffd166" stroke="#111" stroke-width="2.5"/>
          <circle cx="40" cy="24" r="3" fill="#ef4444" />
          <circle cx="60" cy="18" r="3.5" fill="#3b82f6" />
          <circle cx="80" cy="24" r="3" fill="#10b981" />
        `;
      case 'grad_hat':
        return `
          <polygon points="60,24 16,36 60,46 104,36" fill="#0f172a" stroke="#111" stroke-width="2.5"/>
          <rect x="42" y="42" width="36" height="14" fill="#1e293b" />
          <circle cx="60" cy="35" r="3" fill="#ffd166" />
          <line x1="60" y1="35" x2="84" y2="44" stroke="#ffd166" stroke-width="2"/>
        `;
      case 'ninja_band':
        return `
          <path d="M22 48 L98 48 L98 58 L22 58 Z" fill="${color}" stroke="#111" stroke-width="2"/>
          <rect x="48" y="49" width="24" height="8" rx="2" fill="#cbd5e1" stroke="#111" stroke-width="1.2"/>
        `;
      case 'beanie':
        return `
          <path d="M26 50 C24 24 96 24 94 50 Z" fill="${color}" stroke="#111" stroke-width="2.5"/>
          <rect x="22" y="46" width="76" height="10" rx="4" fill="#0f172a" stroke="#111" stroke-width="2"/>
          <circle cx="60" cy="20" r="6" fill="#ffffff" />
        `;
      case 'bow':
        return `
          <polygon points="50,30 36,22 36,38" fill="#f43f5e" stroke="#111" stroke-width="1.5"/>
          <polygon points="70,30 84,22 84,38" fill="#f43f5e" stroke="#111" stroke-width="1.5"/>
          <circle cx="60" cy="30" r="4.5" fill="#f43f5e" stroke="#111" stroke-width="1.5"/>
        `;
      case 'none':
      default:
        return '';
    }
  },

  // Gafas y accesorios de ojos
  generateEyewearSVG(eyewear, color = '#111111') {
    switch (eyewear) {
      case 'sunglasses':
        return `
          <!-- Gafas de sol negras pro gamer -->
          <path d="M30 56 L55 56 L51 72 L34 72 Z" fill="#111111" stroke="#374151" stroke-width="2"/>
          <path d="M65 56 L90 56 L86 72 L69 72 Z" fill="#111111" stroke="#374151" stroke-width="2"/>
          <line x1="55" y1="62" x2="65" y2="62" stroke="#111" stroke-width="3"/>
          <line x1="33" y1="60" x2="48" y2="69" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"/>
          <line x1="68" y1="60" x2="83" y2="69" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"/>
        `;
      case 'nerd_glasses':
        return `
          <circle cx="44" cy="64" r="14" fill="none" stroke="${color}" stroke-width="3"/>
          <circle cx="76" cy="64" r="14" fill="none" stroke="${color}" stroke-width="3"/>
          <line x1="58" y1="64" x2="62" y2="64" stroke="${color}" stroke-width="3"/>
        `;
      case 'cyber_visor':
        return `
          <rect x="28" cy="56" y="56" width="64" height="15" rx="6" fill="#030712" stroke="#00f5d4" stroke-width="2.5"/>
          <line x1="32" y1="63.5" x2="88" y2="63.5" stroke="#00f5d4" stroke-width="2" stroke-dasharray="4,2"/>
        `;
      case 'monocle':
        return `
          <circle cx="76" cy="64" r="13" fill="none" stroke="#ffd166" stroke-width="2.5"/>
          <path d="M89 64 Q96 82 90 98" stroke="#ffd166" stroke-width="1.5" fill="none"/>
        `;
      case 'pirate_patch':
        return `
          <ellipse cx="76" cy="64" rx="12" ry="13" fill="#111111" stroke="#333" stroke-width="1.5"/>
          <line x1="28" y1="46" x2="98" y2="76" stroke="#111" stroke-width="2.5"/>
        `;
      case 'none':
      default:
        return '';
    }
  },

  // Cola del animal (detrás del cuerpo) con movimiento
  generateTailSVG(animal, primary = '#f45d22', secondary = '#ffffff') {
    const S = '#111';
    switch (animal) {
      case 'fox':
        return `
          <g class="avatar-tail">
            <path d="M146 206 C 196 226 238 192 220 136 C 213 116 192 122 192 142 C 192 168 174 188 146 192 Z" fill="${primary}" stroke="${S}" stroke-width="2.8" stroke-linejoin="round"/>
            <path d="M220 136 C 213 116 192 122 192 142 C 192 152 194 160 198 166 C 212 164 224 152 220 136 Z" fill="${secondary}" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>
          </g>`;
      case 'cat': case 'tiger': case 'lion': case 'dog': case 'wolf': case 'unicorn': case 'dragon':
        return `
          <g class="avatar-tail">
            <path d="M150 208 C 190 216 214 190 206 156" stroke="${S}" stroke-width="18" fill="none" stroke-linecap="round"/>
            <path d="M150 208 C 190 216 214 190 206 156" stroke="${primary}" stroke-width="13" fill="none" stroke-linecap="round"/>
            <circle cx="206" cy="156" r="7.5" fill="${secondary}" stroke="${S}" stroke-width="2"/>
          </g>`;
      default:
        return `
          <g class="avatar-tail">
            <circle cx="164" cy="206" r="13" fill="${secondary === '#1a1a1a' ? '#ffffff' : secondary}" stroke="${S}" stroke-width="2.5"/>
          </g>`;
    }
  },

  // Piernas pequeñas con patitas oscuras
  generateLegsSVG(primary = '#f45d22', animal = 'fox') {
    const foot = (animal === 'panda' || animal === 'fox' || animal === 'cat' || animal === 'dog' || animal === 'wolf') ? '#2b1608' : '#3f2a1a';
    return `
      <path d="M94 204 L94 230 Q94 238 102 238 L116 238 Q119 238 119 232 L119 204 Z" fill="${primary}" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M121 204 L121 232 Q121 238 124 238 L138 238 Q146 238 146 230 L146 204 Z" fill="${primary}" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="105" cy="236" rx="13" ry="6.5" fill="${foot}" stroke="#111" stroke-width="2"/>
      <ellipse cx="135" cy="236" rx="13" ry="6.5" fill="${foot}" stroke="#111" stroke-width="2"/>
    `;
  },

  // Torso base redondeado del animal (con pancita clara) + prendas
  generateOutfitSVG(outfit, color = '#7928ca', primary = '#f45d22', secondary = '#ffffff', animal = 'fox') {
    const bellyMap = { panda: '#ffffff', lion: '#fde68a', wolf: '#e5e7eb', tiger: '#fff7ed', dragon: '#fde68a' };
    const belly = bellyMap[animal] || (secondary === '#1a1a1a' ? '#ffffff' : secondary);
    const torsoPath = 'M86 148 Q86 140 96 140 L144 140 Q154 140 154 148 L158 202 Q158 214 146 214 L94 214 Q82 214 82 202 Z';
    const base = `
      <path d="${torsoPath}" fill="${primary}" stroke="#111" stroke-width="2.8" stroke-linejoin="round"/>
      <path d="M106 150 Q120 158 134 150 Q142 176 136 204 Q120 212 104 204 Q98 176 106 150 Z" fill="${belly}"/>
    `;
    switch (outfit) {
      case 'hoodie':
        return `
          <path d="${torsoPath}" fill="${color}" stroke="#111" stroke-width="2.8" stroke-linejoin="round"/>
          <path d="M98 184 L142 184 L146 208 Q120 214 94 208 Z" fill="rgba(0,0,0,0.2)"/>
          <ellipse cx="120" cy="146" rx="26" ry="8" fill="rgba(0,0,0,0.28)"/>
          <line x1="112" y1="150" x2="112" y2="172" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="128" y1="150" x2="128" y2="172" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
        `;
      case 'bowtie':
        return `
          <path d="${torsoPath}" fill="#ffffff" stroke="#111" stroke-width="2.8" stroke-linejoin="round"/>
          <polygon points="118,152 100,142 100,162" fill="${color}" stroke="#111" stroke-width="1.8"/>
          <polygon points="122,152 140,142 140,162" fill="${color}" stroke="#111" stroke-width="1.8"/>
          <circle cx="120" cy="152" r="5" fill="${color}" stroke="#111" stroke-width="1.5"/>
        `;
      case 'scarf':
        return `
          ${base}
          <rect x="86" y="138" width="68" height="17" rx="8" fill="${color}" stroke="#111" stroke-width="2.5"/>
          <rect x="134" y="150" width="15" height="32" rx="5" fill="${color}" stroke="#111" stroke-width="2.2"/>
        `;
      case 'cape':
        return `
          <path d="M80 142 L160 142 L180 224 L60 224 Z" fill="${color}" stroke="#111" stroke-width="2.6" stroke-linejoin="round"/>
          ${base}
          <polygon points="120,158 129,170 120,182 111,170" fill="#ffd166" stroke="#111" stroke-width="1.5"/>
        `;
      case 'medal':
        return `
          ${base}
          <polygon points="108,142 120,168 100,146" fill="#3b82f6"/>
          <polygon points="132,142 120,168 140,146" fill="#ef4444"/>
          <circle cx="120" cy="176" r="12" fill="#ffd166" stroke="#111" stroke-width="2"/>
          <circle cx="120" cy="176" r="7.5" fill="#f59e0b"/>
        `;
      case 'none':
      default:
        return base;
    }
  },

  // Brazos cortos según gesto (hombros en 88,154 y 152,154)
  generateArmsSVG(emote, primary = '#f45d22') {
    const arm = (d) => `
      <path d="${d}" stroke="#111" stroke-width="15.5" stroke-linecap="round" fill="none"/>
      <path d="${d}" stroke="${primary}" stroke-width="10.5" stroke-linecap="round" fill="none"/>`;
    if (emote === 'wave') {
      return `
        ${arm('M88 156 Q72 174 78 194')}
        <g class="arm-waving">${arm('M152 156 Q178 146 180 116')}</g>
      `;
    } else if (emote === 'celebrate' || emote === 'victory') {
      return `
        ${arm('M88 156 Q62 144 62 112')}
        ${arm('M152 156 Q178 144 178 112')}
      `;
    } else if (emote === 'dance') {
      return `
        ${arm('M88 156 Q58 164 70 190')}
        ${arm('M152 156 Q184 146 170 116')}
      `;
    } else if (emote === 'focus') {
      return `
        ${arm('M88 156 Q100 188 116 178')}
        ${arm('M152 156 Q140 188 124 178')}
      `;
    } else if (emote === 'clap') {
      return `
        ${arm('M88 156 Q104 176 118 166')}
        ${arm('M152 156 Q136 176 122 166')}
      `;
    }
    return `
      ${arm('M88 156 Q72 174 78 194')}
      ${arm('M152 156 Q168 174 162 194')}
    `;
  },

  // Icono de jugador para toda la app: usa su avatarConfig, o convierte su emoji a animal Kahoot
  emojiToAnimalMap: {
    '🦊': 'fox', '🐼': 'panda', '🐱': 'cat', '🐶': 'dog', '🦁': 'lion', '🐰': 'rabbit', '🐨': 'koala',
    '🦉': 'owl', '🐵': 'monkey', '🐻': 'bear', '🐺': 'wolf', '🐯': 'tiger', '🐧': 'penguin',
    '🦄': 'unicorn', '🐲': 'dragon', '🤖': 'robot'
  },

  renderPlayerIcon(player, size = 36) {
    try {
      const cfg = player && player.avatarConfig;
      if (cfg) return this.renderIconSVG(cfg, size);
      const animal = this.emojiToAnimalMap[player && player.avatar];
      if (animal) {
        return this.renderIconSVG({ ...this.defaultConfig, animal, headwear: 'none', eyewear: 'none', themeColor: 'default' }, size);
      }
    } catch (e) { /* fallback al emoji */ }
    return (player && player.avatar) || '🦊';
  },

  // Manejador de rotación interactiva 3D con arrastre de ratón o toque táctil
  attachInteractive3D(containerEl, config) {
    if (!containerEl) return;
    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;

    const wrapper = containerEl.querySelector('.mentix-avatar-wrapper');
    if (!wrapper) return;

    wrapper.style.perspective = '1000px';
    wrapper.style.cursor = 'grab';

    const onStart = (clientX) => {
      isDragging = true;
      startX = clientX;
      wrapper.style.cursor = 'grabbing';
      wrapper.style.transition = 'none';
    };

    const onMove = (clientX) => {
      if (!isDragging) return;
      const delta = clientX - startX;
      const deg = currentRotation + delta * 0.7;
      wrapper.style.transform = `perspective(800px) rotateY(${deg}deg)`;
    };

    const onEnd = (clientX) => {
      if (!isDragging) return;
      isDragging = false;
      const delta = clientX - startX;
      currentRotation = (currentRotation + delta * 0.7) % 360;
      wrapper.style.cursor = 'grab';
      wrapper.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      setTimeout(() => {
        if (!isDragging) {
          wrapper.style.transform = 'perspective(800px) rotateY(0deg)';
          currentRotation = 0;
        }
      }, 2500);
    };

    wrapper.onmousedown = (e) => onStart(e.clientX);
    window.addEventListener('mousemove', (e) => onMove(e.clientX));
    window.addEventListener('mouseup', (e) => onEnd(e.clientX));

    wrapper.ontouchstart = (e) => {
      if (e.touches && e.touches[0]) onStart(e.touches[0].clientX);
    };
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX);
    });
    window.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) onEnd(e.changedTouches[0].clientX);
    });
  }
};

console.log('✅ AvatarEngine (Kahoot Edition) cargado exitosamente.');
