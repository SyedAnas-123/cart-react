import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && inputText.trim() !== "") {
      props.addList(inputText.trim());
      setInputText("");
    }
  };

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      props.addList(inputText.trim());
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
