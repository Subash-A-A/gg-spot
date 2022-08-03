import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "./gg_logo.png"

function RightSection() {
  const navigate = useNavigate()

  const categoryArr = [
    "MMORPG",
    "Shooter",
    "Strategy",
    "MOBA",
    "Racing",
    "Sports",
    "Social",
    "Sandbox",
    "open-world",
    "Survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "Fantasy",
    "sci-fi",
    "Fighting",
    "action-rpg",
    "Action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ]

  return (
    <div className="side-section right-section">
      <img
        src={logo}
        alt="GG Logo"
        className="gg-logo"
        onClick={() => navigate("/")}
      />

      <div className="filter-container">
        <div className="icons-container filter">
          <ul className="page-navigation-list">
            <li
              onClick={() => navigate("/")}
              className="navbar-links category-name"
            >
              Home
            </li>
          </ul>
        </div>
        <div className="filter">
          <h1 className="filter-heading">Category</h1>
          <div className="category-list list">
            {categoryArr.map((category, index) => (
              <h2
                className="category-name"
                key={index}
                onClick={() => {
                  navigate("/genre/" + category)
                }}
              >
                {category}
              </h2>
            ))}
          </div>
        </div>
        <div className="filter">
          <h1 className="filter-heading">Platform</h1>
          <div className="list">
            <h2 className="category-name">PC</h2>
            <h2 className="category-name">Browser</h2>
            <h2 className="category-name">All</h2>
          </div>
        </div>
        {/* <div className="filter">
          <h1 className="filter-heading">Sort by</h1>
          <div className="list">
            <h2 className="category-name">release-date</h2>
            <h2 className="category-name">popularity</h2>
            <h2 className="category-name">alphabetical </h2>
            <h2 className="category-name">relevance </h2>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RightSection
