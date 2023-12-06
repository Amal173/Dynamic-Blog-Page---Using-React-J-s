import React from 'react'
import "./Preview.css"

function Preview({blogData}) {
  const { BlogTitle, BlogDiscription, imageURL, tags, BlogContent } = blogData;
  return (


    <div className="preview">
      <div className='previewTitle'><label for="text">Preview</label></div>
      <div className='previewBlog'>
        <div className='previewImg'>
          <img src={imageURL}alt="" />
        </div>
        <div className="previewBlogTitle">
          <h3>{BlogTitle}</h3>
        </div>
        <div className="previewDiscriptionAndTime">{BlogDiscription}<h5></h5></div>
        <div className="previewBlogContent">
          <p>{BlogContent}</p>
        </div>
      </div>
    </div>


  )
}

export default Preview