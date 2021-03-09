import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.snacks.map((el, index) => (
        <li key={index} onClick={() => props.handleClick(index)}>
          Name: {el.name} - Rating: {el.rating} - Description: {el.description}
        </li>
      ))}
    </ul>
  );
};

export { List };
