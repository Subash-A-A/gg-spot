const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema({
  id: {
    type: Number,
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
  short_description: {
    type: String,
    required: true,
  },
  game_url: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  freetogame_profile_url: {
    type: String,
    required: true,
  },
})

const Game = mongoose.model("Game", GameSchema)
module.exports = Game

/**
 * id -> Number
 * title -> String
 * thumbnail -> String
 * short_description -> String
 * game_url -> String
 * genre -> String
 * platform -> String
 * publisher -> String
 * developer -> String
 * release_date -> String
 * freetogame_profile_url -> String
 */
