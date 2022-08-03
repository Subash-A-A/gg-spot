import React from "react"
import { useNavigate } from "react-router-dom"

function GameDBNav() {
  const navigate = useNavigate()
  return (
    <ul className="gamedb-navbar">
      <li
        className="gamedb-navbar-links"
        onClick={() => navigate("/gamedb/insert")}
      >
        Insert Game
      </li>

      <li
        className="gamedb-navbar-links"
        onClick={() => navigate("/gamedb/update/0")}
      >
        Update Game
      </li>
    </ul>
  )
}

export default GameDBNav
