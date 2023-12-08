import React ,{useContext}from 'react'
import './Footer.css'
import Appcontext from '../../../contexts/AppContext';
function Footer() {
  const {currentPage,setCurrentPage,data,itemPerPAge}=useContext(Appcontext);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemPerPAge);
  const handlePreviousClick = (previous) => {
    if (currentPage > 1) {
      setCurrentPage(previous);
    }
  };

  const handleNextClick = (next) => {
    if (currentPage < totalPages ) {
      setCurrentPage(next);
    }
  };

  return (
    <div className='footer'>
       <div className='pagination'>
         <button className='Previous'
          onClick={() => handlePreviousClick(currentPage - 1)}
          style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' , opacity: currentPage === 1 ? 0.3 : 1}}
          >Previous</button>
         <button className='next' 
         onClick={() => handleNextClick(currentPage+1)}
         style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.3 : 1 }}
         >Next »</button>
         </div>
         <div className='copyRight'>
            <p>Powered by StackUP</p>
         </div>
    </div>
  )
}

export default Footer