import React from "react";
import CenterSection from "./CenterSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "../App.css";

function App() {
  return (
    <div className="App">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
}

export default App;
