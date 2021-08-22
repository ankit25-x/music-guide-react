import "./styles.css";
import react, { useState } from "react";

const musicDB = {
  Bollywood: [
    { name: "Tu Jaane Na", artist: "Atif Aslam", rating: " ⭐⭐⭐⭐" },
    { name: "Beetein Lamhen", artist: "KK", rating: "⭐⭐⭐⭐⭐" },
    { name: "Aao Na", artist: "Vishal Dadlani", rating: "⭐⭐⭐⭐" }
  ],
  Rock: [
    { name: "Lips of an Angel", artist: "Hinder", rating: "⭐⭐⭐⭐" },
    { name: "Summer of 69", artist: "Bryan Adams", rating: "⭐⭐⭐⭐⭐" },
    { name: "Pour some sugar on me", artist: "Def Leppard", rating: "⭐⭐⭐" }
  ],
  Metal: [
    { name: "Enter the Sandman", artist: "Metallica", rating: "⭐⭐⭐⭐⭐" },
    { name: "Engel", artist: "Rammstein", rating: "⭐⭐⭐⭐" },
    { name: "Last Resort", artist: "Papa Roach", rating: "⭐⭐⭐⭐" }
  ],
  EDM: [
    { name: "I could be the one", artist: "Avicii", rating: "⭐⭐⭐⭐⭐" },
    { name: "Calling", artist: "Swedish House Mafia", rating: "⭐⭐⭐⭐⭐" },
    { name: "Pressure", artist: "Alesso", rating: "⭐⭐⭐⭐⭐" }
  ]
};
var musicList = Object.keys(musicDB);
export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  function musicClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Music Guide for Dummies!</h1>
      <div>
        {musicList.map((genre) => (
          <button
            style={{
              cursor: "pointer",
              margin: "1rem",
              borderRadius: "0.3rem",
              backgroundColor: "mistyrose",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              border: "1px solid black"
            }}
            onClick={() => musicClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="container">
        <ul className="list-container">
          {musicDB[selectedGenre].map((list) => (
            <li
              style={{
                border: "1px solid #D1D5DB",
                padding: "0.5rem",
                margin: "1rem 0.5rem",
                marginBottom: "2rem",
                marginLeft: "4rem",
                width: "70%",
                borderBottomLeftRadius: "0.5rem",
                backgroundColor: "pink",
                border: "1px solid black"
              }}
            >
              <div>{list.name}</div>
              <div>{list.artist} </div>
              <div>{list.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
