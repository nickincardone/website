export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  technologies: string[];
}

const portfolio: PortfolioItem[] = [
  {
    title: "Catan Counter",
    description:
      "A Chrome Extension that tracks opponent cards in Catan on colonist.io. Includes probabilistic predictions for unknown cards.",
    image: "https://www.nickincardone.com/images/catan.png",
    githubLink: "https://github.com/nickincardone/catan-counterr",
    demoLink:
      "https://github.com/nickincardone/catan-counter?tab=readme-ov-file#setup",
    technologies: ["Typescript", "Chrome Extension"],
  },
  {
    title: "Conjugator",
    description:
      "Practice Spanish conjugations and definitions with over 1000 verbs. MVP of a\n" +
      "            larger Spanish Application that I am working on.",
    image: "https://www.nickincardone.com/images/conjugator.png",
    githubLink: "https://github.com/nickincardone/conjugator",
    demoLink: "https://www.nickincardone.com/conjugator/",
    technologies: ["React"],
  },
  // {
  //   "title": "Playlist Magic",
  //   "description": "Analyze your favorite Spotify playlist, or compare two to each other." +
  //     " Leverages Spotify's Web API to pull audio statistics for the the songs in a specified playlist.",
  //   "image": "https://www.nickincardone.com/images/playlist-magic.png",
  //   "githubLink": "https://github.com/nickincardone/playlist-magic-ui",
  //   "demoLink": "https://www.nickincardone.com/playlist-magic/",
  //   "technologies": ['Vue', 'Express']
  // },
  {
    title: "Website",
    description:
      "This site right here. A static React application that generates my website\n" +
      "            from some JSON files",
    image: "https://www.nickincardone.com/images/website.png",
    githubLink: "https://github.com/nickincardone/website",
    demoLink: "#",
    technologies: ["React"],
  },
];

export default portfolio;
