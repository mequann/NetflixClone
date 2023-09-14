import React ,{useState,useEffect}from 'react'

import "./Row.css"
import axios  from './../axios';


function Row({title,fetchUrl}) {
  // props destructuring {title}==this.props.title
    const [Movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
         try{  
           const requests=await axios.get(fetchUrl);
          console.log(requests)
            setMovies(requests.data.resuts);
            return requests;}
            catch(error){

              console.log(error.message)
            }
        }
        fetchData();
      },[fetchUrl])
       
      //console.log(Movies)
  return (
    <div>
       <h1>{title}</h1>
    </div>
  )
}

export default Row