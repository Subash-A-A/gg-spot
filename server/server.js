const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect(
  "mongodb+srv://username:mypassword@cluster0.b6wossn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
)

app.get("/", (req, res) => {})

app.listen(3001, () => {
  console.log("Listening on port 3001")
})
