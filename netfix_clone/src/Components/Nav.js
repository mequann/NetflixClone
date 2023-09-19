import React, { useEffect, useState } from 'react'
import logo from '../images/netflix_logo.png'
import avater from '../images/Netflix-avatar.png'
import "./Nav.css"

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>50?handleShow(true):handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{
              // handleShow(false)
            })

        }
    },[])
  return (
    <div className={`nav${show&&"nav__black"}`}>
        <img  src= {logo}  className='nav__log' alt='Netflix Logo' />
         <img className='nav__avatar'
     src= {avater}
        alt='Avator Logo'/>
    </div>
  )
}

export default Nav
//./../images/