import React from "react";

function Game({ thumbnail, id }) {
  return (
    <div>
      <img src={thumbnail} alt="" key={id} />
    </div>
  );
}

export default Game;
