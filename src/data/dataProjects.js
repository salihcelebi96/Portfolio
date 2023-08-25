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

const Tools =[
  "Js-React-Redux-Tailwind",
  "Js-React-Redux-Tailwind",
  "Js-React-Redux-Tailwind",
  "Js-React-Fetch",
  "Js-WeatherApi",
  "Js-React-Redux-Tailwind",
  "Js-React-Redux-Tailwind",
  "Js-Css"
]

const Info = [
  "Select the car which one you want to rent and decide to between which days you will use and we will pay it  made by react,redux and tailwind",
  "Data Security company they to presented many option and we will select to the best option for us and we will pay it made by react,redux and tailwind ",
  "This app shows us the successful and unsuccessful shots of a basketball player in a pie chart according to his total shot. made by react,redux and tailwind ",
  "Select to difficulty and start to solving  test. pulled from quiz api. made by react.",
  "Write a city name show the weather. pulled from weather api",
  "First of all login after login  search ıt for which one you want to see movie and you can see view detal for movie. made by react,redux and tailwind",
  "E-Shopping site  Find the product you want by searching or you can find it from the categories.  made by react,redux and tailwind",
  "Tic-Tac-Toe game made by js-css"
]


const sourceCode = [
  "https://github.com/salihcelebi96/Rent-a-car",
  "https://github.com/salihcelebi96/Corporate-Site",
  "https://github.com/salihcelebi96/Graphic",
  "https://github.com/salihcelebi96/QuizTime",
  "https://github.com/salihcelebi96/weather-app",
  "https://github.com/salihcelebi96/movieApp",
  "https://github.com/salihcelebi96/e-Ticaret",
  "https://github.com/salihcelebi96/Tic-Tac-Toe-Game"
]



export const screenData = [
  { name: "Rent a car", image: rentscreen, url: vercelUrls[0], tools: Tools[0], info: Info[0], sourceCode: sourceCode[0] },
  { name: "Security Site", image: corporate, url: vercelUrls[1], tools: Tools[1], info: Info[1], sourceCode: sourceCode[1] },
  { name: "Graphic", image: graphic, url: vercelUrls[2], tools: Tools[2], info: Info[2], sourceCode: sourceCode[2] },
  { name: "Quiz", image: quiz, url: vercelUrls[3], tools: Tools[3], info: Info[3], sourceCode: sourceCode[3] },
  { name: "Weather Api", image: weather, url: vercelUrls[4], tools: Tools[4], info: Info[4], sourceCode: sourceCode[4] },
  { name: "Movie App", image: movie, url: vercelUrls[5], tools: Tools[5], info: Info[5], sourceCode: sourceCode[5] },
  { name: "E-Shopping App", image: ticaret, url: vercelUrls[6], tools: Tools[6], info: Info[6], sourceCode: sourceCode[6] },
  { name: "Tic-Tac-Toe Game", image: tictactoe, url: vercelUrls[7], tools: Tools[7], info: Info[7], sourceCode: sourceCode[7] }
];



