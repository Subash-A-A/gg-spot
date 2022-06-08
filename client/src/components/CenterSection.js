import React, { useState, useEffect } from "react"
import Game from "./Game"
import Axios from "axios"

function CenterSection() {
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const getGames = async () => {
      Axios.get("http://localhost:3001/").then((result) => {
        setGames(result.data)
      })
    }
    getGames()
  }, [])

  return (
    <div className="center-section">
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </div>
      <div className="games-container">
        {games
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase())
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
  )
}

export default CenterSection
