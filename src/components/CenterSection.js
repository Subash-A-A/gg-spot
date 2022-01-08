import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

function CenterSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = () => {
      var options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "291b459f47msh34c415c69193855p173452jsn366e4f807462",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setGames(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getGames();
  }, []);

  console.log(games);

  return (
    <div className="center-section">
      {games.map((game) => (
        <Game thumbnail={game.thumbnail} id={game.id} />
      ))}
    </div>
  );
}

export default CenterSection;
