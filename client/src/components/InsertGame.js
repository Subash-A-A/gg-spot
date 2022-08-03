import React, { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

function InsertGame() {
  const navigate = useNavigate()

  const placeholders = [
    ["ID", "number"],
    ["Title", "text"],
    ["Thumbnail", "text"],
    ["Genre", "text"],
    ["Platform", "text"],
    ["Publisher", "text"],
    ["Developer", "text"],
    ["Release Date", "date"],
    ["Game URL", "text"],
  ]

  const [id, setId] = useState(0)
  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [genre, setGenre] = useState("")
  const [platform, setPlatform] = useState("")
  const [publisher, setPublisher] = useState("")
  const [developer, setDeveloper] = useState("")
  const [releaseDate, setReleaseDate] = useState("")
  const [gameUrl, setGameUrl] = useState("")
  const [shortDescription, setShortDescription] = useState("")

  const setDetails = [
    setId,
    setTitle,
    setThumbnail,
    setGenre,
    setPlatform,
    setPublisher,
    setDeveloper,
    setReleaseDate,
    setGameUrl,
  ]

  const details = {
    id,
    title,
    thumbnail,
    genre,
    platform,
    publisher,
    developer,
    releaseDate,
    gameUrl,
    shortDescription,
  }

  const handleClick = () => {
    console.log(details)
    Axios.post("http://localhost:3001/insert", details).then(() => {
      navigate("/")
    })
  }

  return (
    <div className="main-form-container">
      <div className="gamedb-form">
        {placeholders.map(([placeholder, type], index) => (
          <input
            type={type}
            placeholder={placeholder}
            className="form-input"
            key={index}
            onChange={(event) => setDetails[index](event.target.value)}
          />
        ))}
      </div>
      <textarea
        type="text"
        placeholder="Short Description"
        className="form-input"
        onChange={(event) => setShortDescription(event.target.value)}
      />
      <button className="submit-button" onClick={handleClick}>
        Add to DB
      </button>
    </div>
  )
}

export default InsertGame
