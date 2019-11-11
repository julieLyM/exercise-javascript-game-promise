import auth from "./auth";

const axios = require("axios");
axios({
  method: "GET",
  url: "https://rawg-video-games-database.p.rapidapi.com/games",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    privateKey: auth.privateKey
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
