import React, { useContext } from "react";
import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import DisplayBlog from "./MainContainer/DisplayBlog";
import SecondaryComponents from "../SecondaryContainer/SecondaryComponents";
import Appcontext from "../../contexts/AppContext";

const BlogData = () => {
  const {filteredBlogs}=useContext(Appcontext)
  return (
    <div>
      <div className="container">
        <Header />
        <div className="mainSection">
          <DisplayBlog data={filteredBlogs} />
          <SecondaryComponents  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogData;
