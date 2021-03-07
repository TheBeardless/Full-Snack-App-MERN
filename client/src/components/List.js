import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.snacks.map((el, index) => (
        <li key={index} onClick={() => props.handleClick(index)}>
          Title: {el.title} - Genre: {el.genre}
        </li>
      ))}
    </ul>
  );
};

export { List };
