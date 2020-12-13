import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🇦🇺": "Flag: Australia",
  "🇧🇷": "Flag: Brazil",
  "🇩🇪": "Flag: Germany",
  "🇮🇳": "Flag: India",
  "🇰🇷": "Flag: South Korea",
  "🇯🇵": "Flag: Japan",
  "🇺🇸": "Flag: United States",
  "🇬🇪": "Flag: Georgia"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [mean, setMean] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    let mean = emojiDictionary[userInput];
    if (mean === undefined) {
      mean = "we don't have this in our database";
    }

    setMean(mean);
  }

  function emojiClickHandler(emoji) {
    // processing
    const mean = emojiDictionary[emoji];
    setMean(mean);
  }

  return (
    <div className="App">
      <h1>Emojis meaning</h1>
      <input onChange={emojiInputHandler} className="input" />
      <div className="mean"> {mean} </div>

      <div className="know">Emojis we knows</div>
      {emojisWeKnow.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            key={item}
            className="item"
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
