import React from 'react';

import rentscreen from "../assets/screens/rentscreen.png";
import corporate from "../assets/screens/securityscreen.png";
import graphic from "../assets/screens/graphicscreen.png";
import quiz from "../assets/screens/quizscreen.png";
import weather from "../assets/screens/weatherscreen.png";
import movie from "../assets/screens/moviescreen.png";
import ticaret from "../assets/screens/e-ticaretscreen.png";
import tictactoe from "../assets/screens/tictactoescreen.png";

const vercelUrls = [
  "https://rent-a-car-phi.vercel.app/",
  "https://corporate-site-jet.vercel.app/",
  "https://graphic-beige.vercel.app/",
  "https://quiz-time-hazel.vercel.app/",
  "https://weather-app-rho-black.vercel.app/",
  "https://movie-app-beta-rouge.vercel.app/",
  "https://e-ticaret-two.vercel.app/",
  "https://tic-tac-toe-game-indol-seven.vercel.app/"
];



export  const screenData = [
  { name: "Rent a car", image: rentscreen, url: vercelUrls[0] },
  { name: "Security Site", image: corporate, url: vercelUrls[1] },
  { name: "Graphic", image: graphic, url: vercelUrls[2] },
  { name: "Quiz", image: quiz, url: vercelUrls[3] },
  { name: "Weather Api", image: weather, url: vercelUrls[4] },
  { name: "Movie App", image: movie, url: vercelUrls[5] },
  { name: "E-Ticaret App", image: ticaret, url: vercelUrls[6] },
  { name: "Tic-Tac-Toe Game", image: tictactoe, url: vercelUrls[7] }
];





