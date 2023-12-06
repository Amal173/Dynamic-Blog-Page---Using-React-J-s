import React,{useContext} from "react";
import "./PopularPostComponent.css";
import Appcontext from "../../../contexts/AppContext";
function PopularPostComponent() {
  const { data } = useContext(Appcontext);
  return (
    <div className="PopularPostComponent">
      <div className="title">
        <h4>Popular Posts</h4>
      </div>
      <div className="posts">
        {data.slice(-4).toReversed().map((data) => (
          <div className="postContents" key={data.id}>
            <div className="PostImage">
              <img src={data.imageURL} alt="Blog" />
            </div>
            <div className="contentSection">
              <div className="postTitle">{data.BlogTitle}</div>
              <div className="postDiscription">{data.BlogDiscription}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularPostComponent;
