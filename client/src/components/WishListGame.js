import React from "react"
import Axios from "axios"

function WishListGame({ id, title, thumbnail }) {
  const handleClick = () => {
    Axios.post("http://localhost:3002/remove", {
      id,
    })
  }

  return (
    <div className="wishlist-game">
      <img
        src={thumbnail}
        alt=""
        key={id}
        className="wishlist-game-thumbnail"
      />
      <p>{title}</p>
      <button className="wishlist-game-remove-btn" onClick={handleClick}>
        X
      </button>
    </div>
  )
}

export default WishListGame
