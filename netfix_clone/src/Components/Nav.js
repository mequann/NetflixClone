import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>100?handleShow(true):handleShow(false);
        });
        // return ()=>{
        //     window.removeEventListener("scroll")

        // }
    },[])
  return (
    <div className={`nav${show&&"nav__black"}`}>
        <img className='nav__log'
        src='../images/netflix_logo.png'
       alt='Netflix Logo' />
         <img className='nav__avatar'
        src='../images/Netflix-avatar.png'
        alt='Avator Logo'/>
    </div>
  )
}

export default Nav
//./../images/