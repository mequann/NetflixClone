import React ,{useEffect, useState}from 'react'
import "./Banner.css"

import requests from './../request';
import axios from '../axios';

const baseUrl="https://api.themoviedb.org/3"
const base_url="https://image.tmdb.org/t/p/original/"

function Banner() {
    const[Movie,setMovie]=useState([])
    useEffect(()=>{
async function fetchData(){
    // const request=await  axios?.get(requests.fetchNetflixOriginals)
    // console.log(request)
    // setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
    const response = await fetch(baseUrl+requests.fetchNetflixOriginals);
    const request= await response.json()
    console.log(request)
   console.log(request.results.length)
//    let indx=Math.floor(Math.random()*request.results.length)
//    console.log(indx)
    setMovie(request.results[Math.floor(Math.random()*request.results.length)])
    // //  return request
}
   fetchData() },[])
//    console.log(Movie)
   function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str;
   }
  return (
    <header className='banner'
        style={
           { backgroundSize:"cover",
        backgroundImage:`url(${base_url}${Movie?.backdrop_path})`,
    BackGroundPosition:`center center`
}} >
<div className='banner__contents'>
            <h1 className='banner__title'>{
}{Movie?.title||Movie?.name||Movie?.original_name}</h1>
<div className='banner__buttons'>
    <button className='banner__button'>Play</button>
    <button className='banner__button'>My List</button>
</div>
<h1 className='banner__description'>{truncate(Movie?.overview,150)}</h1>
        </div>
        <div className='banner__fadeBottom'/>
    </header>
  )
}

export default Banner
//https://api.themoviedb.org/3/discover/tv?api_key=8d4d74d40f62a835cbae4f8eb0dc8750&with_networks=213