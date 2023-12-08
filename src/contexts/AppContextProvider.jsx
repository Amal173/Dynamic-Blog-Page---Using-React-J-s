import React,{useState ,useEffect} from "react";

import Appcontext from "./AppContext";

const AppContextProvider=({children})=>{
    const [data, setData] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [currentPage, setCurrentPage]=useState(1);
    const [itemPerPAge, setItemPerPage]=useState(2);
    const filteredBlogs = selectedTag
    ? data.filter((blog) => blog.tags.includes(selectedTag))
    : data;
   

    
  useEffect(() => {
    fetch(`http://localhost:4000/blog`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
      
  },[]);
  
    return (
        <Appcontext.Provider value={{ data ,selectedTag,setSelectedTag,filteredBlogs,currentPage,setCurrentPage,itemPerPAge,setItemPerPage}}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppContextProvider