import React,{useState ,useEffect} from "react";

import Appcontext from "./AppContext";

const AppContextProvider=({children})=>{
    const [data, setData] = useState([]);
   
    
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
        <Appcontext.Provider value={{ data }}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppContextProvider