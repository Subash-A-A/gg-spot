const GameModel = require("./models/Game")

const getGames = (req, res) => {
  GameModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const getGamesByGenre = (req, res) => {
  const genre = req.body.genre
  console.log(genre)
  GameModel.find({ genre: genre }, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const getGameByID = (req, res) => {
  console.log(req.body)
  const id = req.body.id
  GameModel.find({ id: id }, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      console.log(result)
      res.send(result)
    }
  })
}

const removeGameByID = (req, res) => {
  const id = req.body.id
  GameModel.deleteOne({ id: id }, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
}

const updateGameByID = (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const thumbnail = req.body.thumbnail
  const short_description = req.body.shortDescription
  const game_url = req.body.gameUrl
  const genre = req.body.genre
  const platform = req.body.platform
  const publisher = req.body.publisher
  const developer = req.body.developer
  const release_date = req.body.releaseDate

  GameModel.findOneAndUpdate(
    { id: id },
    {
      $set: {
        title: title,
        thumbnail: thumbnail,
        short_description: short_description,
        game_url: game_url,
        genre: genre,
        platform: platform,
        publisher: publisher,
        developer: developer,
        release_date: release_date,
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err)
      } else {
        console.log(doc)
      }
    }
  )
}

const insertGame = async (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const thumbnail = req.body.thumbnail
  const short_description = req.body.shortDescription
  const game_url = req.body.gameUrl
  const genre = req.body.genre
  const platform = req.body.platform
  const publisher = req.body.publisher
  const developer = req.body.developer
  const release_date = req.body.releaseDate

  const game = new GameModel({
    id: id,
    title: title,
    thumbnail: thumbnail,
    short_description: short_description,
    game_url: game_url,
    genre: genre,
    platform: platform,
    publisher: publisher,
    developer: developer,
    release_date: release_date,
  })

  await game
    .save()
    .then(res.send("Inserted Data"))
    .catch((err) => console.log(err))
}

module.exports = {
  getGames,
  getGamesByGenre,
  getGameByID,
  removeGameByID,
  updateGameByID,
  insertGame,
}
