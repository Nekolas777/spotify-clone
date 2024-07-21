export interface Artist {
  id: number;
  name: string;
  profileImg: string;
  bio?: string;
  isVerified: boolean;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Neovaii",
    profileImg: "https://i.scdn.co/image/ab67616100005174af4a9a56ac0dd4e2e2cec2d2",
    isVerified: true
  },
  {
    id: 2,
    name: "Taylor Swift",
    profileImg: "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
    isVerified: true
  },
  {
    id: 3,
    name: "Rauw Alejandro",
    profileImg: "https://i.scdn.co/image/ab67616100005174a0881fe672e4e39f9ec0a9e0",
    isVerified: true
  },
  {
    id: 4,
    name: "Feint",
    profileImg: "https://i.scdn.co/image/ab676161000051747ce019cab4cdc2bc93c2ebb3",
    isVerified: true
  },
  {
    id: 5,
    name: "Ariana Grande",
    profileImg: "https://i.scdn.co/image/ab6761610000517440b5c07ab77b6b1a9075fdc0",
    isVerified: true
  },
  {
    id: 6,
    name: "Milo J",
    profileImg: "https://i.scdn.co/image/ab67616100005174c6f1d44557a4c7fe7518f29a",
    isVerified: true
  },
  {
    id: 7,
    name: "Artic Monkeys",
    profileImg: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
    isVerified: true
  },
  {
    id: 8,
    name: "Natalia Lafourcade",
    profileImg: "https://i.scdn.co/image/ab67616100005174c3c42a12891de47e2a39a95a",
    isVerified: true
  },
  {
    id: 9,
    name: "Faraon Love Shady",
    profileImg: "https://i.scdn.co/image/ab67616d00001e02a2cd7dbf992e65a3279d158d",
    isVerified: true
  },
  {
    id: 10,
    name: "Eva Luna",
    profileImg: "https://i.scdn.co/image/ab67616100005174e0fea3817a423295c9236332",
    isVerified: true
  }
]