import React from 'react'
import {useState,useEffect} from 'react'
import './TopStats.css'

function TopStats() {

  let time = 1;
  // setInterval(time+1,1000)

  return (
    <div className='topStatContainer'>
        <p>Karan <br /> 000019</p>
        <p>Home</p>
        <p>Section <br /> 1-6</p>
        <p>Time <br /> {219}</p>
    </div>
  )
}

export default TopStats