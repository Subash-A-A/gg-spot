import React from "react";

function Game({ thumbnail, id }) {
  return (
    <div className="game-div">
      <img src={thumbnail} alt="" key={id} className="game-thumbnail" />
    </div>
  );
}

export default Game;
