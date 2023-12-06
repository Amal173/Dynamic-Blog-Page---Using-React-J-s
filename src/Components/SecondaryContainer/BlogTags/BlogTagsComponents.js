import React, { useContext, useState, useEffect } from "react";
import "./BlogTags.css";
import AppContext from "../../../contexts/AppContext";

function BlogTagsComponents({ tagSetData }) {
  const { data } = useContext(AppContext);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  // Filter blog posts based on the selected tag
  const filteredBlogs = selectedTag
    ? data.filter((blog) => blog.tags.includes(selectedTag))
    : data;
   

  useEffect(() => {
    // Call tagSetData inside useEffect to avoid infinite loop
    tagSetData(filteredBlogs);
  }, [filteredBlogs, tagSetData]);

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
