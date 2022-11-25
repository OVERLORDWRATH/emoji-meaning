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
  "🇬🇪": "Flag: Georgia",
  "🇨🇦": "Flag: Canada",
  "🇩🇰": "Flag: Denmark"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("or Choose an Emoji");
  var [emoji, setEmoji] = useState("");
  function emojiClickHandler(item) {
    console.log("clicked", item);
    var newEmoji = item;
    setEmoji(newEmoji);
    if (newEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[newEmoji]);
    } else {
      setMeaning("Meaning not present in our dictionary");
    }
  }
  function emojiInputHandler(event) {
    var newEmoji = event.target.value;
    setEmoji(newEmoji);
    console.log(event.target.value);
    if (newEmoji === "") {
      setMeaning("Please enter a valid emoji");
    } else {
      if (newEmoji in emojiDictionary) {
        setMeaning(emojiDictionary[newEmoji]);
      } else {
        setMeaning("Meaning not present in our dictionary");
      }
    }
  }

  return (
    <div className="App">
      <h1>Flag knowledge</h1>
      <input onChange={emojiInputHandler} className="input" />
      <div>{emoji}</div>
      <div className="mean"> {meaning} </div>
      <div className="know">Flags we knows</div>
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
