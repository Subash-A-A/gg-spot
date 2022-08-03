import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Game from "./Game"
import Axios from "axios"

function CenterSection() {
  const navigate = useNavigate()
  const { genre } = useParams()
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("running")
    const getGames = async () => {
      if (genre === undefined) {
        Axios.get("http://localhost:3001/").then((result) => {
          setGames(result.data)
        })
      } else {
        Axios.post("http://localhost:3001/", {
          genre: genre,
        }).then((result) => {
          setGames(result.data)
        })
      }
    }
    getGames()
  }, [genre])

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
        <button
          className="insert-db-btn"
          onClick={() => {
            navigate("/gamedb")
          }}
        >
          GameDB
        </button>
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
