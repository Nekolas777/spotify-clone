import { colors } from "./colors";

export interface Song {
  id: number;
  bannerImage: string;
  artists: string[];
  title: string;
  color?: (typeof colors)[keyof typeof colors];
  album: string;
  date: string;
  duration: string;
  musicPath: string;
  isFavorite: boolean;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "On & On",
    color: colors.orange,
    artists: ["Cartoon", "Jéja", "Daniel Levi"],
    bannerImage: "https://i.scdn.co/image/ab67616d0000b2734d02949f4eaa850b2c178e70",
    album: "On & On",
    date: "15 mar 2015",
    duration: "3:28",
    musicPath: "/music/On&On.mp3",
    isFavorite: false
  },
  {
    id: 2,
    title: "Why We Lose",
    color: colors.deepOrange,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b2735f12c4a8aa1c0acfb2e982e1`,
    artists: ["Cartoon", "Jéja", "Daniel Levi"],
    album: "Why We Lose",
    date: "10 jul 2016",
    duration: "3:33",
    musicPath: "/music/WhyWeLose.mp3",
    isFavorite: false
  },
  {
    id: 3,
    title: "Nekozilla",
    color: colors.lime,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273c5d106258d9d3ea4d0d4b70a`,
    artists: ["Different Heaven"],
    album: "NCS: Infinity",
    date: "20 nov 2014",
    duration: "2:46",
    musicPath: "/music/Nekozilla.mp3",
    isFavorite: false
  },
  {
    id: 4,
    title: "Royalty",
    color: colors.brown,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b27375f8e991774621da2bf53a14`,
    artists: ["Ezgod", "Maestro Chives", "Neoni"],
    album: "Royalty",
    date: "5 feb 2020",
    duration: "3:43",
    musicPath: "/music/Royalty.mp3",
    isFavorite: false
  },
  {
    id: 5,
    title: "Under Water",
    color: colors.lightGray,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273838a1a462df2ba547bf0ed40`,
    artists: ["Fareoh"],
    album: "Under Water",
    date: "12 jun 2017",
    duration: "2:45",
    musicPath: "/music/UnderWater.mp3",
    isFavorite: false
  },
  {
    id: 6,
    title: "Outlaw",
    color: colors.blueGray,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273f3d9bd1082a7053018d5785b`,
    artists: ["It's Different", "Miss Mary"],
    album: "Outlaw",
    date: "18 sep 2018",
    duration: "4:20",
    musicPath: "/music/Outlaw.mp3",
    isFavorite: false
  },
  {
    id: 7,
    title: "Firefly",
    color: colors.gray,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273a11e3d61ddf6877cc9374cfa`,
    artists: ["Jim Yosef"],
    album: "Firefly",
    date: "25 dec 2016",
    duration: "3:45",
    musicPath: "/music/Firefly.mp3",
    isFavorite: false
  },
  {
    id: 8,
    title: "Taking It Slow",
    color: colors.blue,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b27339c47f4b0d90f6e674eb5420`,
    artists: ["JVNA"],
    album: "JVNA Music",
    date: "8 jan 2021",
    duration: "2:40",
    musicPath: "/music/TakingItSlow.mp3",
    isFavorite: false
  },
  {
    id: 9,
    title: "Overdose",
    color: colors.amber,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273a9aa45a3babbd152ebab5d52`,
    artists: ["KDH", "Andrew A", "David Allen"],
    album: "Overdose",
    date: "14 oct 2019",
    duration: "2:51",
    musicPath: "/music/Overdose.mp3",
    isFavorite: false
  },
  {
    id: 10,
    title: "Different Eyes",
    color: colors.lightBlue,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273aa403a332b3fa1626898a8e6`,
    artists: ["MVSTAFA", "Anyziz"],
    album: "Different Eyes",
    date: "3 may 2023",
    duration: "1:54",
    musicPath: "/music/DifferentEyes.mp3",
    isFavorite: false
  },
  {
    id: 11,
    title: "Whitout You",
    color: colors.orange,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273c0623117d8c62eee3ca9125e`,
    artists: ["NIVIRO", "Justin J. Moore"],
    album: "Whitout You",
    date: "22 aug 2020",
    duration: "3:08",
    musicPath: "/music/WhitoutYou.mp3",
    isFavorite: false
  },
  {
    id: 12,
    title: "Vibe",
    color: colors.lightGray,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b2737cbd08604af5c20451ed2f55`,
    artists: ["Spicyverse"],
    album: "Vibe",
    date: "30 apr 2022",
    duration: "2:59",
    musicPath: "/music/Vibe.mp3",
    isFavorite: false
  },
  {
    id: 13,
    title: "Fearless Pt. II",
    color: colors.orange,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273df7c14e866cf14a259563ca1`,
    artists: ["Lost Sky", "Chris Linton"],
    album: "Fearless",
    date: "25 sept 2024",
    duration: "3:14",
    musicPath: "/music/FearlessPtII.mp3",
    isFavorite: false
  },
  {
    id: 14,
    title: "Why Do I?",
    color: colors.purple,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b273b5a2938e9048107729ff24fe`,
    artists: ["Bri Tolani", "Unknown Brain"],
    album: "Why Do I?",
    date: "10 feb 2023",
    duration: "3:43",
    musicPath: "/music/WhyDoI.mp3",
    isFavorite: false
  },
  {
    id: 15,
    title: "Mortals",
    color: colors.red,
    bannerImage: `https://i.scdn.co/image/ab67616d0000b2738dcc1482aa0ffeb1143905a2`,
    artists: ["Warriyo"],
    album: "Mortals",
    date: "1 jun 2015",
    duration: "3:48",
    musicPath: "/music/Mortals.mp3",
    isFavorite: false
  },
];
