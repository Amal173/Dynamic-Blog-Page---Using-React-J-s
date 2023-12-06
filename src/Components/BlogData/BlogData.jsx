import React, { useState } from "react";
import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import DisplayBlog from "./MainContainer/DisplayBlog";
import SecondaryComponents from "../SecondaryContainer/SecondaryComponents";

const BlogData = () => {
  const [tagData, setTagData] = useState([]);

  function tagSetData(data) {
    setTagData(data);
 
  }

  return (
    <div>
      <div className="container">
        <Header />
        <div className="mainSection">
          <DisplayBlog data={tagData} />
          <SecondaryComponents tagSetData={tagSetData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogData;
