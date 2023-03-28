import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Students from "./Students";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function List() {
  return (
    <div>
      <ul>
        <li>A</li>
        <li>B</li>
      </ul>
    </div>
  );
}

function Remark() {
  return <p>Happy Coding</p>;
}

root.render(
  <div>
    <Header></Header>
    <List></List>
    <Students exp={5} name="Fahim Sarker" />
    <Remark></Remark>
  </div>
);
