export interface Playlist {
  id: number;
  name: string;
  description: string;
  spotifyURI: string;
  tags: number[];
}

const playlists: Playlist[] = [
  {
    id: 22,
    name: "Jul/Aug 2020",
    description:
      "Chill songs that I liked in July/August 2020, during my first few months in Chicago (though quarantining). " +
      "Featuring SALES, Four Tet, and Crooked Colours.",
    spotifyURI: "1MiJmWlTfFR4Fk1aPXfu5q",
    tags: [1, 2, 3, 4, 8, 9, 10, 11, 15, 16],
  },
  {
    id: 1,
    name: "Nick's Big Ass Chill Playlist",
    description:
      "1400+ songs of chill. It'll be hard not to find a song you like.",
    spotifyURI: "4VbUfHyNZhcCUBFzjdoYWN",
    tags: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 16],
  },
  {
    id: 21,
    name: "May/Jun 2020",
    description:
      "Songs that I liked in May/June 2020, while I was moving from Atlanta to Chicago. Featuring Banes World," +
      " HOMESHAKE, and Sugar Candy Mountain.",
    spotifyURI: "2fToASiD79qbrDKUuR87FJ",
    tags: [1, 2, 3, 4, 8, 9, 10, 11, 15, 16],
  },
  {
    id: 20,
    name: "Como Aqua",
    description:
      "An updated version of my Alternativo playlist with more recent songs. Songs in Spanish" +
      " that you can appreciate even if you don't speak the language.",
    spotifyURI: "20cbLfwosemNegQQbwgkH3",
    tags: [1, 2, 3, 4, 11, 17, 18],
  },
  {
    id: 19,
    name: "2020 Boat Party",
    description:
      "Deep/Pop house meant to be enjoyed on a boat with all of your friends. Built for a day on Lake Michigan.",
    spotifyURI: "0o3UffoZVR1gA188Tp28Ih",
    tags: [1, 4, 20],
  },
  {
    id: 3,
    name: "Nu Disco",
    description:
      "Chill indie tracks inspired by the likes of the three Ps: Parcels, Polo & Pan and Poolside " +
      "(ok maybe 4). Great for lounging around the house or a pool. This used to be my go-to playlist for " +
      "Catan nights. All the songs on here probably aren't technically Nu Disco, but whatever, it's a vibe.",
    spotifyURI: "46f2239OVXKD9HnpICvQXJ",
    tags: [1, 2, 3, 4, 11],
  },
  {
    id: 18,
    name: "Mar/Apr 2020",
    description:
      "Chill songs that I liked in March/April 2020, while I was stuck quarantining in Atlanta." +
      " Including multiple songs from Bella Boo and a band called Sniffle Party which has only ever put out 3 " +
      "songs and I love all of them. Sniffle Party if you are reading this, please put out new music.",
    spotifyURI: "7Hj6pBxVOMSLuJ3myBZUho",
    tags: [1, 2, 3, 4, 8, 9, 10, 11, 15, 16],
  },
  {
    id: 9,
    name: "Hungry Hippo",
    description:
      "A soulful alternative playlist spanning many genres. I basically started with songs from" +
      " Kaytranada, Blood Orange, and Tierra Whack then added songs that fit the vibe. Indie Rap," +
      " Alternative, and Electronic music with a little something to it.",
    spotifyURI: "2lpqCtzM3iOm4Ir4bQQaoq",
    tags: [1, 2, 3, 4, 5, 6, 7, 8, 10, 16],
  },
  {
    id: 2,
    name: "Jan/Feb 2020",
    description:
      "Laidback songs that I was really into the first two months of the year (before covid-19 turned" +
      " the world upside down). Including new releases I loved from Tame Impala, Kaytranada, and Nicola Cruz. Part of an" +
      " ongoing series to track my music taste over time.",
    spotifyURI: "7DUatmUClN658xvmLgn4Hw",
    tags: [1, 2, 3, 4, 8, 9, 10, 11, 15, 16],
  },
  {
    id: 4,
    name: "Alternativo",
    description:
      "Created this playlist when I started learning Spanish as I discovered more and more Spanish" +
      " language indie artists. There is no reggaeton here just alternative rock and electronica. Even if" +
      " you don't understand Spanish you should be able to apreciate the music.",
    spotifyURI: "1JUsfGt8gnZvPh1R6pxGUj",
    tags: [1, 2, 3, 4, 17, 18],
  },
  {
    id: 7,
    name: "Nov/Dec 2019",
    description:
      "Chill songs I jammed out to during the end of 2019. These months I was really into Blood" +
      " Culture, STRFKR, Crumb and Goth Babe. Basically a bunch of trip rock. Part of an ongoing series to" +
      " track my music taste over time.",
    spotifyURI: "4IUwFxEbSoaNA6Kch7Z6Ya",
    tags: [1, 2, 3, 4, 8, 9, 10, 11, 15, 16],
  },
  {
    id: 10,
    name: "If air was water",
    description:
      "I wish I had a better way to describe this playlist beside wavy, but that's what it is." +
      ' Laid back music that when you listen will make you think, "yeah I can see it being in a playlist' +
      " titled 'If Air was Water' \"",
    spotifyURI: "3re04r7G3gl06MCuu8WRBS",
    tags: [1, 2, 3, 4, 10, 11, 16],
  },
  {
    id: 5,
    name: "Not so Secret",
    description:
      "Indie pop and soft alternative with (mostly) female singers. Featuring a ton of Clairo," +
      " Tennis, Sales, and Alvvays. This is the ultimate playlist when you just want to loaf around and feel a bit sappy.",
    spotifyURI: "0MQyd5CqJgD8HZBSFVYZDQ",
    tags: [1, 2, 11],
  },
  {
    id: 6,
    name: "Red Sunset",
    description:
      "As the name implies it is meant to be listened to during a sunset. Originally created on one" +
      " long car ride to a cabin, this playlist contains a mix of trippy type song from a mix of genres." +
      " Featuring Childish Gambino, Tame Impala, Zhu, Toro y Moi, and Rufus du Sol. ",
    spotifyURI: "36zI0hvONVB6iBuO3l0ayb",
    tags: [1, 2, 3, 4, 5, 6, 7, 8, 10, 16],
  },
  {
    id: 8,
    name: "Real Estate",
    description:
      "Beach bum rock. The first large playlist that I made which I actively add to. As the name" +
      " suggests it is inspired the band Real Estate, but it also features many songs from Beach Fossils," +
      " DIIV, Tame Impala, and Washed Out.",
    spotifyURI: "1iPgUZs2cDBIBCCmZ0OAbf",
    tags: [1, 2, 3, 8],
  },
  {
    id: 11,
    name: "Bass House",
    description:
      "Bass House. Pretty straight forward. This genre dominated my life for about a year and this" +
      " playlist has become my go-to for working out or running.",
    spotifyURI: "3UluunZqq1klH9hAevCnRi",
    tags: [12, 20, 13, 14],
  },
  {
    id: 12,
    name: "Dirty Bird",
    description:
      "What was originally a playlist of Dirty Bird artists eventually became general Tech House one." +
      " Featuring the likes of Fisher, Chris Lake, Shiba San, and Mike McFly. Listen if you are trying to party.",
    spotifyURI: "2ESzfb9M9oMxZ5gquunBJ7",
    tags: [12, 20],
  },
  {
    id: 13,
    name: "Organica",
    description:
      "Originally named Desert Trance for what I guessed the genre would be called when I first heard" +
      " it, this playlist is a whole lot of Nicola Cruz and Matanza. If you don't know what Organica is," +
      " I would describe it as a mix between techno and house with live and unique instruments.",
    spotifyURI: "0JuZN0evYbDFmuSNiYublA",
    tags: [1, 4, 20, 15, 16],
  },
  {
    id: 14,
    name: "Mellow Yellow",
    description:
      "Mellow songs, duh. Indie alternative and electronic songs that make you want to lay in a" +
      " hammock for a while. Featuring a good bit of Caribou, Maribou State, and Poolside.",
    spotifyURI: "1UguGUOXt5ARtRJWF92AmI",
    tags: [1, 2, 3, 4, 6, 7, 10, 11, 16],
  },
  {
    id: 15,
    name: "June 2019, a Moment",
    description:
      "A random mix of soft alternative/pop with chill house. Started out as a playlist of chill" +
      " songs that I like for me to sort later, but I found it was a really good mixture. ",
    spotifyURI: "1PDeegjvwLNXdeiR9o2Hlh",
    tags: [1, 2, 3, 4, 10, 11, 20],
  },
  {
    id: 16,
    name: "Washed Feelings",
    description:
      "A collection of Bedroom pop and electronic music with vocals with heavy reverb. Think artists like Washed Out, thus the name.",
    spotifyURI: "3HWQGKvnb3kAQq33gMpUtl",
    tags: [1, 2, 3, 4, 8, 10, 16],
  },
  {
    id: 17,
    name: "French Connection",
    description:
      "French music that I like. No I do not speak French, but I am a big fan of French artists" +
      " like Polo & Pan, Parcels, L'Impératrice, and Paradis. Nu Disco type music with a mix of what Spotify" +
      " calls Indie Soul.",
    spotifyURI: "5p871wKWecFYHjvKhJJI1j",
    tags: [1, 2, 4, 11, 19],
  },
];

export default playlists;
