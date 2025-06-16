export interface Playlist {
  id: number;
  name: string;
  description: string;
  spotifyURI: string;
  tags: number[];
}

const playlists: Playlist[] = [
  // ...existing code from playlists.js...
];

export default playlists;
