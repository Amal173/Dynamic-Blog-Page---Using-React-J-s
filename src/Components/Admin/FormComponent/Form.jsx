// Form.js
import React, { useState,useEffect }  from 'react';
import "./Form.css";
import axios from 'axios';
import Preview from '../PreviewComponent/Preview';
import { toast } from 'react-toastify';


function Form() {


  const notify = () => toast.success("Blog Created Succesfully");

  const [blogData, setBlogData] =useState({
    BlogTitle: '',
    BlogDiscription: '',
    imageURL: '',
    tags: '',
    BlogContent: '',
    time:''
  });
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    if (refreshFlag) {
      setBlogData({
        BlogTitle: '',
        BlogDiscription: '',
        imageURL: '',
        tags: '',
        BlogContent: '',
        time:''
      });
      setRefreshFlag(false);
    }
  }, [refreshFlag]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { BlogTitle, BlogDiscription, imageURL, tags, BlogContent } = blogData;
    const date = new Date();
    const showTime = date.toISOString();
    try {
      await axios.post(`http://localhost:4000/blog`, {
        BlogTitle,
        BlogDiscription,
        imageURL,
        tags,
        BlogContent,
        time:showTime
      })
        .then((res) => {
          console.log(res);
          notify();
          setRefreshFlag(true);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prevBlogData) => ({
      ...prevBlogData,
      [name]: value,
    }));
  };

  return (
    <div className='blogForm'>
      <div className='formAdmin'>
        <div className="signup-actions">
          <div className="login-header">
            <h1>Add Blog Here</h1>
          </div>

          <form id="sign-up-form">
          <div className="input">
              <label htmlFor="imageURL">Blog image url</label>
              <input
                type="text"
                name="imageURL"
                id='imageURL'
                placeholder='Enter image url'
                value={blogData.imageURL}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <label htmlFor="BlogTitle">Blog Title</label>
              <input
                type="text"
                name="BlogTitle"
                id='BlogTitle'
                placeholder="Enter your Blog Title"
                value={blogData.BlogTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <label htmlFor="BlogDiscription">Blog Description</label>
              <input
                type="text"
                name="BlogDiscription"
                id='BlogDiscription'
                placeholder='Enter Blog Description'
                value={blogData.BlogDiscription}
                onChange={handleInputChange}
              />
            </div>
       

            <div className="input">
              <label htmlFor="tags">Blog Tag</label>
              <input
                type="text"
                name="tags"
                id='tags'
                placeholder='Enter Blog Tag'
                value={blogData.tags}
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <label htmlFor="BlogContent">Blog content</label>
              <textarea
                type="text"
                name="BlogContent"
                id='BlogContent'
                placeholder='Enter Blog content'
                value={blogData.BlogContent}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="Signup" id="Signup" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <div className='adminPreview'> 
      <Preview blogData={blogData} />
     
    </div>
     
    </div>
  );
}

export default Form;
