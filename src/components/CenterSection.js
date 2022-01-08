import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";

function CenterSection() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="center-section">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="games-container">
        {games
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((game) => (
            <Game
              thumbnail={game.thumbnail}
              id={game.id}
              title={game.title}
              desc={game.short_description}
              key={game.id}
            />
          ))}
      </div>
    </div>
  );
}

export default CenterSection;
