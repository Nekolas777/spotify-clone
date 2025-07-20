import { colors } from "./colors";

export interface Playlist {
  id: number;
  name: string;
  color?: (typeof colors)[keyof typeof colors];
  type: string;
  author: string;
  description?: string;
  profileImg: string;
  bannerImg: string;
}

export const playlists: Playlist[] = [
  {
    id: 1,
    name: "Monstercat Classics",
    color: colors.lightGray,
    type: "Lista",
    author: "Monstercat",
    description: "Compilation of the best Monstercat songs that bring you back to the good old days",
    profileImg: "https://i.scdn.co/image/ab6761610000f1784783a51dd63610bafeba1f09",
    bannerImg: "https://i1.sndcdn.com/artworks-000279517538-os4qq0-t500x500.jpg"
  },
  {
    id: 2,
    name: "En el Lienzo",
    color: colors.lightGray,
    type: "Lista",
    author: "Mon Laferte",
    description: "This Is Mon Laferte. Los temas esenciales, todos en una lista.",
    profileImg: "https://i.scdn.co/image/ab6761610000f1782a89a5ad55e1cb241440afef",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e02ac6e52ed084e8209691f208f"
  },
  {
    id: 3,
    name: "Pretty Boy",
    color: colors.lightGray,
    type: "Lista",
    author: "Maluma",
    description: "Maluma exitos - Grandes éxitos Maluma - Maluma viejitas",
    profileImg: "https://i.scdn.co/image/ab6761610000f178912d3ab996f98aa30d3a05d0",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e023c3acd23605ccd1a9fd038bd"
  },
  {
    id: 4,
    name: "Viceversa",
    color: colors.purple,
    type: "Lista",
    author: "Rauw Alejandro",
    description: "Rauw Alejandro Éxitos 🔥 Rauw Alejandro Mix",
    profileImg: "https://i.scdn.co/image/ab6761610000f178a0881fe672e4e39f9ec0a9e0",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e02d9525f27b0a9e25b1fa21230"
  },
  {
    id: 5,
    name: "Neovaii Time",
    color: colors.blue,
    type: "Lista",
    author: "Neovaii",
    description: "All of Neovaii; in just 1 playlist!",
    profileImg: "https://i.scdn.co/image/ab6761610000f178af4a9a56ac0dd4e2e2cec2d2",
    bannerImg: "https://i.scdn.co/image/ab67616d0000aa5410e48470c9840a85cbabe2fc"
  },
  {
    id: 6,
    name: "Beats to relax/study",
    color: colors.brown,
    type: "Lista",
    author: "Lofi Girl",
    description: "Calm mellow lofi beats to chill and study to, curated by steezy prime.",
    profileImg: "https://i.scdn.co/image/ab67757000003b822d75223c2d1d89c511dee2a5",
    bannerImg: "https://i.pinimg.com/564x/a4/97/e2/a497e286ee662ce1500500173d0d9808.jpg"
  },
  {
    id: 7,
    name: "Balas Perdidas",
    color: colors.lightGray,
    type: "Lista",
    author: "Morat",
    description: "This Is Morat. Los temas esenciales, todos en una lista",
    profileImg: "https://i.scdn.co/image/ab6761610000f17808c3b70e494bd0ea0ef56fb7",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e0290fa215e791c13fe9bacb8bc"
  },
  {
    id: 8,
    name: "Degeneracion Actual",
    type: "Lista",
    author: "Pedro Suárez Vertiz",
    color: colors.red,
    description: "This Is Pedro Suárez-Vértiz. Los temas esenciales, todos en una lista.",
    profileImg: "https://i.scdn.co/image/ab6761610000f178d8aacea169dbf485886c2bee",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e021bfc2ca68dfb8a1f71d04dae"
  },
  {
    id: 9,
    name: "1989 (Taylor's Version)",
    color: colors.lightBlue,
    type: "Lista",
    author: "Taylor Swift",
    description: "💕 Taylor Swift Exitos 💕😍",
    profileImg: "https://i.scdn.co/image/ab6761610000f178e672b5f553298dcdccb0e676",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac"
  },
  {
    id: 10,
    name: "NFSMW",
    color: colors.lightGray,
    type: "List",
    author: "EA Games",
    description: "I added every song available on Spotify in order as acurate as the original tracks in the game",
    profileImg: "https://i.scdn.co/image/ab67757000003b82fb8413bd5a0412010594c889",
    bannerImg: "https://i.scdn.co/image/ab67616d00001e025032738dfd5020d5e7902021"
  },
];
