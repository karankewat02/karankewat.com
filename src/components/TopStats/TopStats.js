import React from 'react'
import {useState,useEffect} from 'react'
import './TopStats.css'

function TopStats() {


  const time =0;

  useEffect(()=>{
    setInterval(()=>{
      time = time +1
    },1000)
  },[])

  return (
    <div className='topStatContainer'>
        <p>Karan <br /> 000019</p>
        <p>Home</p>
        <p>Section <br /> 1-6</p>
        <p>Time <br /> {time}</p>
    </div>
  )
}

export default TopStats