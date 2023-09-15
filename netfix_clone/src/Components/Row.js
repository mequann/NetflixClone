import React ,{useState,useEffect}from 'react'

import "./Row.css"
// import instance  from '../axios';
// import axios from "axios"


const baseUrl="https://api.themoviedb.org/3"
const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl}) {
  // props destructuring {title}==this.props.title，
  const [Movies,setMovies]=useState([]);
  useEffect(()=>{
    // async function fetchData(){
    //   try{  
    //        const requests=await axios.get(`${baseUrl}${fetchUrl}`)
    //        console.log(requests.data.resuts)
    //        setMovies(requests.data.resuts);
    //         //  console.log(requests.data.resuts)
    //         return requests
    //       }
    //          catch(error){

    //          console.log(error.message)
    //         }
    //       }
    //     fetchData();
    //////
    async function logMovies() {
      const response = await fetch(baseUrl+fetchUrl);
      const movies = await response.json();
      //console.log(movies);
      //console.log(movies.results);
      setMovies(movies.results)
    }
    logMovies()
},[fetchUrl])
       console.log(Movies);
      //  console.log(Movies[0].poster_path)
  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className='row__posters'>
        {Movies.map((movie)=>
        (
          <img src={`${base_url}  ${movie.poster_path}`} alt={movie.name}/>
          
        ))}
         
       </div>
    </div>
  )
}

export default Row
//https://image.tmdb.org/t/p/original//qayga07ICNDswm0cMJ8P3VwklFZ.jpg