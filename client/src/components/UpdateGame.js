import React, { useState } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function UpdateGame() {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true)

  const { gameID } = useParams()

  const placeholders = [
    ["Title", "text"],
    ["Thumbnail", "text"],
    ["Genre", "text"],
    ["Platform", "text"],
    ["Publisher", "text"],
    ["Developer", "text"],
    ["Release Date", "date"],
    ["Game URL", "text"],
  ]

  const [id, setId] = useState(gameID)
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
    setTitle,
    setThumbnail,
    setGenre,
    setPlatform,
    setPublisher,
    setDeveloper,
    setReleaseDate,
    setGameUrl,
  ]
  const value = [
    title,
    thumbnail,
    genre,
    platform,
    publisher,
    developer,
    releaseDate,
    gameUrl,
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
    Axios.post("http://localhost:3001/update", details).then(navigate("/"))
  }

  const clearForm = () => {
    setDetails.forEach((setFunction) => {
      setFunction("")
    })
    setId(null)
    setShortDescription("")
    setDisabled(true)
  }

  const getGameData = () => {
    if (id === null) {
      setDisabled(true)
    } else {
      Axios.post("http://localhost:3001/get-details", {
        id,
      }).then((result) => {
        const data = result.data[0]
        console.log(data)
        setTitle(data.title)
        setThumbnail(data.thumbnail)
        setGenre(data.genre)
        setPlatform(data.platform)
        setPublisher(data.publisher)
        setDeveloper(data.developer)
        setReleaseDate(data.release_date)
        setGameUrl(data.game_url)
        setShortDescription(data.short_description)
        setDisabled(false)
      })
    }
  }

  return (
    <div className="main-form-container">
      <div className="">
        <input
          type="number"
          placeholder={"ID"}
          className="form-input"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />
        <button className="submit-button" onClick={getGameData}>
          Get Details
        </button>
        <button className="submit-button" onClick={clearForm}>
          Clear
        </button>
      </div>
      <div className="gamedb-form">
        {placeholders.map(([placeholder, type], index) => (
          <input
            type={type}
            placeholder={placeholder}
            className="form-input"
            key={index}
            onChange={(event) => setDetails[index](event.target.value)}
            disabled={disabled}
            value={value[index]}
          />
        ))}
      </div>
      <textarea
        type="text"
        placeholder="Short Description"
        className="form-input"
        onChange={(event) => setShortDescription(event.target.value)}
        disabled={disabled}
        value={shortDescription}
      />
      {
        <button
          className="submit-button"
          onClick={handleClick}
          disabled={disabled}
        >
          Update
        </button>
      }
    </div>
  )
}

export default UpdateGame
