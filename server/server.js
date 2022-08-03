const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const gDB = require("./gameDBFunctions")
const wDB = require("./wishListDBFunctions")

const app = express()
const app1 = express()

app.use(express.json())
app.use(cors())
app1.use(express.json())
app1.use(cors())

// link of cloudDB
// mongodb+srv://username:mypassword@cluster0.b6wossn.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect("mongodb://localhost:27017/gameDB", {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to db"))

app.post("/insert", (req, res) => {
  gDB.insertGame(req, res)
})
app.get("/", (req, res) => {
  gDB.getGames(req, res)
})
app.post("/get-details", (req, res) => {
  gDB.getGameByID(req, res)
})
app.post("/", (req, res) => {
  gDB.getGamesByGenre(req, res)
})
app.post("/remove", (req, res) => {
  gDB.removeGameByID(req, res)
})
app.post("/update", (req, res) => {
  gDB.updateGameByID(req, res)
})

app1.post("/add-to-wishlist", (req, res) => {
  wDB.insertIntoWishlist(req, res)
})

app1.get("/", (req, res) => {
  wDB.getGames(req, res)
})

app1.post("/remove", (req, res) => {
  wDB.removeById(req, res)
})

app.listen(3001, () => {
  console.log("App: Listening on port 3001")
})
app1.listen(3002, () => {
  console.log("App1: Listening on port 3002")
})
