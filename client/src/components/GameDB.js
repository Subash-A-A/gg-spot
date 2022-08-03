import React from "react"
import { Route, Routes } from "react-router-dom"
import GameDBNav from "./GameDBNav"
import InsertGame from "./InsertGame"
import UpdateGame from "./UpdateGame"

function GameDB() {
  return (
    <div className="center-section gamedb-container">
      <GameDBNav />
      <div className="gamedb-components-container">
        <Routes>
          <Route path="/insert" element={<InsertGame />}></Route>
          <Route path="/update/:gameID" element={<UpdateGame />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default GameDB
