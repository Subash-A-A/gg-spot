import React from "react"
import "../App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import CenterSection from "./CenterSection"
import GameDB from "./GameDB"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sections">
          <LeftSection />
          <Routes>
            <Route path="/" element={<CenterSection />}></Route>
            <Route path="/genre/:genre" element={<CenterSection />}></Route>
            <Route path="/gamedb/*" element={<GameDB />}></Route>
          </Routes>
          <RightSection />
        </div>
      </div>
    </Router>
  )
}

export default App
