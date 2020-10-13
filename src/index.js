//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <p>this is a paragraph</p>
    <ul>
      <li>
        <h3>gol gappe</h3>
      </li>
      <li>
        <h3>pav bhaji</h3>
      </li>
      <li>
        <h3>dosa</h3>
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
