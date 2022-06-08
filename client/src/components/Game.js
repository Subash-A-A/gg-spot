import React from "react"

function Game({ thumbnail, id, title, desc }) {
  return (
    <div className="game-div">
      <img src={thumbnail} alt="" key={id} className="game-thumbnail" />
      <div className="game-info">
        <h2 className="game-title">{title}</h2>
        <p className="game-desc">{desc}</p>
      </div>
    </div>
  )
}

export default Game
