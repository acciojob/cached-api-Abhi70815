
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';


const App = () => {
  const [allData, setData] = useState([]);
  const apiData=useMemo(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(...data);
      return setData((prev)=>[...prev, ...data])
    });
  },[])
 
    apiData;
    
  
  return (
    <ul>
       {allData.map((data, index)=>{
        console.log(data)
           return <li key={index}>
             <h2>{data.title}</h2>
             <p>{data.body}</p>
            </li>
       })}

    </ul>
  )
}

export default App
