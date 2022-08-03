const mongoose = require("mongoose")

const WishlistGameSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
})

const WishlistGame = mongoose.model("WishlistGame", WishlistGameSchema)

module.exports = WishlistGame
