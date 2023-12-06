import React from "react";
import "./NameCard.css"

function NameCard() {
  return (
    <div className="NameCard">
      <div>
        <img src="https://www.w3schools.com/w3images/avatar_g.jpg"></img>
      </div>
      <div className="titleName">
        <h4>My Name</h4>
      </div>
      <div className="cardDiscription">
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>
    </div>
  );
}

export default NameCard;
