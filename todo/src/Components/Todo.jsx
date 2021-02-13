import React from "react";

function Todo(props) {
  //return <div>{props.item}</div>;
  return (
    <div>
      <ul>
        {props.listItem.map((item, i) => (
          <div key={i}>
            {item}{" "}
            <button onClick={() => props.completeItem(i)}>Complete</button>
            {"    "}
            <button onClick={() => props.clearItem(i)}>Delete</button>
          </div>
        ))}
      </ul>
      <h4>Completed Task</h4>
      <ul>
        {props.done.map((item, i) => (
          <div key={i} style={{ textDecoration: "line-through" }}>
            {item}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
