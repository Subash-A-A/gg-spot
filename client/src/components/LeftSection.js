import React, { useState, useEffect } from "react"
import WishListGame from "./WishListGame"
import Axios from "axios"

function LeftSection() {
  const [games, setGames] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3002/").then((result) => {
      setGames(result.data)
    })
  }, [games])

  return (
    <div className="side-section left-section">
      <h1>Wishlist</h1>
      <div className="wishlist-games-container">
        {games.map((game) => (
          <WishListGame
            id={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default LeftSection
