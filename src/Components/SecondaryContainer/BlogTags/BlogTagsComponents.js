import React, { useContext } from "react";
import "./BlogTags.css";
import AppContext from "../../../contexts/AppContext";

function BlogTagsComponents() {
  const { data,selectedTag,setSelectedTag } = useContext(AppContext);
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="BlogTagsComponent">
      <div className="title">
        <h4>Tags</h4>
      </div>
      <div className="tags">
        {getUniqueTags(data).map((tag, index) => (
          <div
            className={`tagName ${tag === selectedTag ? "selected" : ""}`}
            key={index}
            onClick={() => handleTagClick(tag)}
          >
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to get unique tags from all blog posts
const getUniqueTags = (data) => {
  const allTags = data.flatMap((blog) => blog.tags);
  return [...new Set(allTags)];
};

export default BlogTagsComponents;
