const WishlistGameModel = require("./models/Wishlist")

const insertIntoWishlist = async (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const thumbnail = req.body.thumbnail

  const wishlistGame = new WishlistGameModel({
    id: id,
    title: title,
    thumbnail: thumbnail,
  })
  await wishlistGame
    .save()
    .then(res.send("Inserted into wishList: Game ID: " + id))
    .catch((err) => console.log(err))
}

const getGames = (req, res) => {
  WishlistGameModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const removeById = (req, res) => {
  const id = req.body.id
  WishlistGameModel.deleteOne({ id: id }, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
}

module.exports = { insertIntoWishlist, getGames, removeById }
