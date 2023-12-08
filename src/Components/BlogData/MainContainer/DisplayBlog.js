import React, { useState ,useContext} from "react";
import { formatDistanceToNow } from "date-fns";
import "./DisplayBlog.css";
import Appcontext from "../../../contexts/AppContext";

function DisplayBlog({ data }) {

const {currentPage,itemPerPAge}=useContext(Appcontext);

  const [expandedMap, setExpandedMap] = useState({});

  const toggleReadMore = (id) => {
    setExpandedMap((prevExpandedMap) => ({
      ...prevExpandedMap,
      [id]: !prevExpandedMap[id],
    }));
  };

  const renderTimeAgo = (timestamp) => {
    if (!timestamp) {
      return "Invalid Date";
    }

    const parsedTimestamp = new Date(timestamp);

    if (isNaN(parsedTimestamp.getTime())) {
      return "Invalid Date";
    }

    return formatDistanceToNow(parsedTimestamp, { addSuffix: true });
  };

const indexofLastPage=currentPage*itemPerPAge;
const indexofFirstPage=indexofLastPage-itemPerPAge;
const currentBlogs=data.slice(indexofFirstPage,indexofLastPage);


  return (
    <div>
      {currentBlogs.map((blogItem) => (
        <div className="displayBlog" key={blogItem.id}>
          <div className="imageContainer">
            <img src={blogItem.imageURL} alt="Blog" />
          </div>
          <div className="blogTitle">
            <h3>{blogItem.BlogTitle}</h3>
            <div className="blogDiscriptionAndTime">
              <h5>{blogItem.BlogDiscription},</h5>
              <span>{renderTimeAgo(blogItem.time)}</span>
            </div>
          </div>
          <div className="blogContent">
            <p>
              {expandedMap[blogItem.id]
                ? blogItem.BlogContent
                : blogItem.BlogContent.slice(0, 332) + "......"}
            </p>
          </div>
          <div className="blogFooter">
            <div className="blogFooterBtn">
              <button onClick={() => toggleReadMore(blogItem.id)}>
                <b>{expandedMap[blogItem.id] ? "Read Less « " : "Read More »"}</b>
              </button>
            </div>
            <div className="commentSection">
              <span>Comments</span>
              <span className="commentsCount">4</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayBlog;
