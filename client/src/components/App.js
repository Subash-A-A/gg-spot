import React from "react"
import CenterSection from "./CenterSection"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import "../App.css"

function App() {
  return (
    <div className="App">
      <div className="sections">
        <LeftSection />
        <CenterSection />
        <RightSection />
      </div>
    </div>
  )
}

export default App
