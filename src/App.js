//Files Imported
import React, { useState } from "react";
import { emojiDB } from "./EmojiDB";
import "./styles.css";

var emojiArray = Object.keys(emojiDB);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function inputChangeEventHandler(event) {
    var input = event.target.value;
    var emojiMeaning = emojiDB[input];
    if (input === undefined) {
      emojiMeaning = "we don't have this in our database";
    }
    setEmojiMeaning(emojiMeaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDB[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="emojiCard">
      <header>
        <h1 className="header">
          Welcome to <br />
          Animals Emoji Interpreter
        </h1>
      </header>
      <section>
        <form className="form">
          <label>Search Animals Emoji</label>
          <input
            onChange={inputChangeEventHandler}
            type="text"
            className="emojiField"
          ></input>
        </form>
        <div className="messageWrapper">
          <h1 className="message">{emojiMeaning}</h1>
        </div>
        <div className="emojiList">
          <h1 className="divHeader">Frequently Used Emojis</h1>

          <ul className="emojiCollection">
            {emojiArray.map((emoji) => {
              return (
                <li
                  className="emoji"
                  onClick={() => emojiClickHandler(emoji)}
                  key={emoji}
                >
                  {emoji}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
