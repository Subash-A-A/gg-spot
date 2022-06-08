import React from "react";

function RightSection() {
  const categoryArr = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
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
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  return (
    <div className="side-section">
      <div className="filter-container">
        <div className="filter">
          <h1 className="filter-heading">Category</h1>
          <div className="category-list list">
            {categoryArr.map((category, index) => (
              <h2 className="category-name" key={index}>
                {category}
              </h2>
            ))}
          </div>
        </div>
        <div className="filter">
          <h1 className="filter-heading">Platform</h1>
          <div className="list">
            <h2>PC</h2>
            <h2>Browser</h2>
            <h2>All</h2>
          </div>
        </div>
        <div className="filter">
          <h1 className="filter-heading">Sort by</h1>
          <div className="list">
            <h2>release-date</h2>
            <h2>popularity</h2>
            <h2>alphabetical </h2>
            <h2>relevance </h2>
          </div>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default RightSection;
