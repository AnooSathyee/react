import React, { useState } from "react";

const ToDoApp = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    props.field(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      <br></br>
      <button onClick={handleButtonClick}>Add ToDo</button>
      <br></br>
      <button onClick={props.clearAll}>Clear All</button>
    </div>
  );
};

export default ToDoApp;
