import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
       <div className='pagination'>
         <button className='Previous'>Previous</button>
         <button className='next'>Next »</button>
         </div>
         <div className='copyRight'>
            <p>Powered by StackUP</p>
         </div>
    </div>
  )
}

export default Footer