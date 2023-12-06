import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">MY BLOG</h1>
      <p className="headerDiscription">
        Welcome to the blog of  <span>unknown</span>
      </p>
    </div>
  );
}

export default Header;
