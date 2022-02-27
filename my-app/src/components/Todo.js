import React from "react";
// import { useState } from "react";

import "./Todo.css";
function Todo() {
  return (
    <div className="Todo__block">
      <h2 className="block__title">Do Coding</h2>
      <p className="block__text">
        Do coding for 2hours straight for every 2hrs
      </p>
      <button className="block__button">Delete</button>
    </div>
  );
}

export default Todo;
