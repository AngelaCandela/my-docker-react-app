import React from "react";

const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
          <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>{value}</p>
      ))}
    </div>
  )
};

export default Tile;
