import React from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

function Game({ thumbnail, id, title, desc }) {
  const navigate = useNavigate()
  const handleClick = () => {
    Axios.post("http://localhost:3002/add-to-wishlist", {
      id,
      title,
      thumbnail,
    })
  }

  const deleteOnClick = () => {
    Axios.post("http://localhost:3001/remove", {
      id,
    })
  }

  const updateOnClick = () => {
    navigate("/gamedb/update/" + id)
  }

  return (
    <div className="game-div">
      <img src={thumbnail} alt="" key={id} className="game-thumbnail" />
      <div className="game-info">
        <h2 className="game-title">{title}</h2>
        <p className="game-desc">{desc}</p>
      </div>
      <div className="wishlist-control-buttons">
        <button className="wishlist-control-btn red" onClick={deleteOnClick}>
          Delete
        </button>
        <button className="wishlist-control-btn" onClick={updateOnClick}>
          Update
        </button>
        <button className="wishlist-control-btn" onClick={handleClick}>
          Add to Wishlist
        </button>
      </div>
    </div>
  )
}

export default Game
