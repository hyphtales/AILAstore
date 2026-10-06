export interface Game {
  id: number;
  title: string;
  genre: string;
  price: number;
  rentalPrice: number;
  rating: number;
  image: string;
  badge?: 'Nouveau' | 'En promotion' | 'Exclusivité';
  discount?: number;
  description: string;
  gallery: string[];
  developer: string;
  releaseDate: string;
  platforms: string[];
  includedInPass: boolean;
}

export interface CategoryUniverse {
  id: number;
  title: string;
  icon: string;
  tags: string[];
  description: string;
  accent: string;
  glow: string;
  highlighted?: boolean;
}

export const featuredGames: Game[] = [
  {
    id: 1,
    title: 'Shadow Realm',
    genre: 'RPG / Action',
    price: 59.99,
    rentalPrice: 4.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/19249701/pexels-photo-19249701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Nouveau',
    description: "Plongez dans un monde sombre où chaque choix sculpte votre destin. Shadow Realm vous emporte dans une épopée RPG où les ombres recèlent autant de dangers que de trésors. Un système de combat dynamique, une narration branchée et un univers gothique magnifiquement rendu.",
    gallery: [
      'https://images.pexels.com/photos/19249701/pexels-photo-19249701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16281515/pexels-photo-16281515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/10991746/pexels-photo-10991746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Eclipse Studios',
    releaseDate: '2026-09-15',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    includedInPass: true,
  },
  {
    id: 2,
    title: 'Neon Velocity',
    genre: 'Course / Arcade',
    price: 49.99,
    rentalPrice: 3.99,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/17880456/pexels-photo-17880456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'En promotion',
    discount: 30,
    description: "Une expérience de course futuriste à des vitesses vertigineuses. Defiez vos amis dans des circuits néon, personnalisez vos véhicules et dominez les classements. Neon Velocity redéfinit le genre arcade avec son esthétique cyberpunk éblouissante.",
    gallery: [
      'https://images.pexels.com/photos/17880456/pexels-photo-17880456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34543044/pexels-photo-34543044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14189711/pexels-photo-14189711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Pulse Interactive',
    releaseDate: '2026-07-01',
    platforms: ['PC', 'PS5', 'Switch'],
    includedInPass: true,
  },
  {
    id: 3,
    title: 'Cosmic Drift',
    genre: 'Aventure / Spatial',
    price: 44.99,
    rentalPrice: 3.49,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Exclusivité',
    description: "Explorez un univers infini à bord de votre vaisseau. Cosmic Drift vous offre une liberté totale : commerce interstellaire, exploration planétaire, combats spatiaux et mystères cosmiques. Une aventure sans fin dans un univers procéduralement généré.",
    gallery: [
      'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11089921/pexels-photo-11089921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28158789/pexels-photo-28158789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Stellar Forge',
    releaseDate: '2026-08-20',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    includedInPass: true,
  },
  {
    id: 4,
    title: 'Forgotten Kingdoms',
    genre: 'Stratégie / Fantasy',
    price: 54.99,
    rentalPrice: 4.49,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1006107/pexels-photo-1006107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'En promotion',
    discount: 15,
    description: "Bâtissez un empire, forgez des alliances et conquérez des royaumes oubliés. Forgotten Kingdoms mêle stratégie en temps réel et gestion de royaume dans un univers fantasy riche. Chaque décision politique shape l'avenir de votre civilisation.",
    gallery: [
      'https://images.pexels.com/photos/1006107/pexels-photo-1006107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14332269/pexels-photo-14332269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38757770/pexels-photo-38757770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Crown Interactive',
    releaseDate: '2026-06-10',
    platforms: ['PC', 'Switch'],
    includedInPass: false,
  },
  {
    id: 5,
    title: 'Cyber Nexus',
    genre: 'FPS / Sci-Fi',
    price: 64.99,
    rentalPrice: 5.49,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7773751/pexels-photo-7773751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Nouveau',
    description: "Un FPS multijoueur se déroulant dans un futur cyberpunk. Cyber Nexus propose un gameplay rapide et tactique, des armes customisables et des cartes dynamiques. Le mode histoire vous plonge dans un thriller cybernétique haletant.",
    gallery: [
      'https://images.pexels.com/photos/7773751/pexels-photo-7773751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34592708/pexels-photo-34592708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7773550/pexels-photo-7773550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Nexus Games',
    releaseDate: '2026-10-01',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    includedInPass: true,
  },
  {
    id: 6,
    title: 'Mystic Saga',
    genre: 'RPG / Open World',
    price: 39.99,
    rentalPrice: 2.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/37007723/pexels-photo-37007723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Exclusivité',
    description: "Un RPG en monde ouvert d'une beauté à couper le souffle. Mystic Saga vous transporte dans un royaume magique où chaque recoin cache une quête, un mystère ou un danger. Plus de 100 heures d'aventure avec un système de combat hybride unique.",
    gallery: [
      'https://images.pexels.com/photos/37007723/pexels-photo-37007723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38329925/pexels-photo-38329925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35224072/pexels-photo-35224072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    developer: 'Aether Works',
    releaseDate: '2026-05-15',
    platforms: ['PC', 'PS5', 'Switch'],
    includedInPass: true,
  },
];

export const categoryUniverses: CategoryUniverse[] = [
  {
    id: 1,
    title: 'Grand Public & Familial',
    icon: 'Users',
    tags: ['Course', 'Puzzle', 'Party Game', 'Simulation'],
    description: 'Pour jouer ensemble, en famille ou entre amis',
    accent: 'from-emerald-400 to-teal-400',
    glow: 'rgba(52, 211, 153, 0.15)',
  },
  {
    id: 2,
    title: 'Action & Aventure',
    icon: 'Swords',
    tags: ['Action-Aventure', 'FPS', 'Battle Royale', 'Hack & Slash'],
    description: 'Rythme, adrénaline et exploration',
    accent: 'from-electric-300 to-violet-300',
    glow: 'rgba(124, 138, 255, 0.15)',
  },
  {
    id: 3,
    title: 'Réflexion & Stratégie',
    icon: 'Brain',
    tags: ['Stratégie', 'Gestion', 'Cartes', 'Tower Defense'],
    description: 'Prends le temps de planifier et de gagner',
    accent: 'from-cyan-400 to-blue-400',
    glow: 'rgba(34, 211, 238, 0.15)',
  },
  {
    id: 4,
    title: 'Immersion & Histoire',
    icon: 'BookOpen',
    tags: ['RPG', 'Aventure narrative', 'Visual Novel', 'Walking Simulator'],
    description: 'Vivre une aventure unique, pleine d\u2019\u00e9motion',
    accent: 'from-violet-300 to-electric-400',
    glow: 'rgba(167, 139, 250, 0.15)',
  },
  {
    id: 5,
    title: 'Horreur & Survie',
    icon: 'Ghost',
    tags: ['Horreur psychologique', 'Survie', 'Infiltration'],
    description: 'Plonge dans l\u2019inconnu. Survis à ce qui se cache dans la brume.',
    accent: 'from-red-600 to-red-900',
    glow: 'rgba(220, 38, 38, 0.2)',
    highlighted: true,
  },
  {
    id: 6,
    title: 'Longue Durée & Communauté',
    icon: 'Infinity',
    tags: ['MMORPG', 'MOBA', 'Bac à sable', 'Rogue-lite'],
    description: 'Des mondes qui évoluent, des communautés qui grandissent',
    accent: 'from-gold-300 to-gold-400',
    glow: 'rgba(245, 185, 48, 0.15)',
  },
];

export const ailaPassGames: Game[] = featuredGames.filter((g) => g.includedInPass);
