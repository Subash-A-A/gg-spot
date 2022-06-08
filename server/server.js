const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const GameModel = require("./models/Game")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://username:mypassword@cluster0.b6wossn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
)

app.get("/demoGet", async (req, res) => {
  const game = new GameModel({
    id: 1,
    title: "Dauntless",
    thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
    short_description:
      "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
    game_url: "https://www.freetogame.com/open/dauntless",
    genre: "MMORPG",
    platform: "PC (Windows)",
    publisher: "Phoenix Labs",
    developer: "Phoenix Labs, Iron Galaxy",
    release_date: "2019-05-21",
    freetogame_profile_url: "https://www.freetogame.com/dauntless",
  })

  await game
    .save()
    .then(res.send("Inserted Data"))
    .catch((err) => console.log(err))
})

app.get("/", (req, res) => {
  GameModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log("Listening on port 3001")
})
