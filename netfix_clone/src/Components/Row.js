import React ,{useState,useEffect}from 'react'
import axios  from '../axios';

import "./Row.css"
// import axios from "axios"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"


const baseUrl="https://api.themoviedb.org/3"
const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargeRow}) {
  // props destructuring {title}==this.props.title，
  const [Movies,setMovies]=useState([]);
  const[trailerUrl,setTrailerUrl]=useState("")
  useEffect(()=>{
    // async function fetchData(){
    //   // try{  
    //        const requests=await axios.get(fetchUrl)
    //        console.log(requests)
    //        setMovies(requests.data.resuts);
    //         //  console.log(requests.data.resuts)
    //         // return requests
    //       // }
    //         //  catch(error){

    //         //  console.log(error.message)
    //         // }
    //       }
        
    ////
    async function fetchData() {
      const response = await fetch(baseUrl+fetchUrl);
      const movies = await response.json();
      //console.log(movies);
      // console.log(movies.results);
      setMovies(movies.results)
    }
    fetchData()
},[fetchUrl])
      //  console.log(Movies);
      //  console.log(Movies[0].poster_path)
      // function for image click handler and forwording to youtube
      const opts={
        height:"390",
        width:"100%",
        playerVars:{
autoplay:1
        },
      }
      function handleclick(movie){
if(trailerUrl) {
  setTrailerUrl("")
}
else{
  movieTrailer(movie?.title||movie?.name||movie.oiginal_name)
.then((url)=>{
  const urlParams=new URLSearchParams(new URL(url).search)
  setTrailerUrl(urlParams.get("v"))
})
.catch((error)=>console.log(error))
}
      }
  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className='row__posters'>
        {Movies.map((movie)=>
        (
          <img className={`row__poster ${isLargeRow&&'row__posterLarge'}` } 
          src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}` } alt={movie.name} onClick={()=>handleclick(movie)} />
          
        ))}
         
       </div>
       <div style={{padding:"40px"}}>
        {
          trailerUrl&&<Youtube videoId={trailerUrl} opts={onpopstate}/>
        }
       </div>
    </div>
  )
}

export default Row
//https://image.tmdb.org/t/p/original//qayga07ICNDswm0cMJ8P3VwklFZ.jpg