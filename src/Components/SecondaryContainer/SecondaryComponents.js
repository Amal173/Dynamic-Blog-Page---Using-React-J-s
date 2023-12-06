import React from 'react'
import NameCard from './NameCardComponent/NameCard'
import "./SecondaryComponent.css"
import PopularPostComponent from './PopularPostComponent/PopularPostComponent'
import BlogTagsComponents from './BlogTags/BlogTagsComponents'

function SecondaryComponents({tagSetData}) {
  return (
    <div className='SecondaryComponents'>
        <NameCard />
        <PopularPostComponent />
        <BlogTagsComponents tagSetData={tagSetData}/>
    </div>
  )
}

export default SecondaryComponents