import React from 'react'
import {useState,useEffect} from 'react'
import './TopStats.css'

function TopStats(props) {

  const [section,setSection] = useState('Home')
  const [sectionNo,setSectionNo] = useState(1)
  const [time,setTime] = useState(0)
  useEffect(
      ()=>{
        setSection(props.section)
        setSectionNo(props.sectionNo)
      }
      ,[props]
    )

    var myVar = setInterval(function() {
      myTimer();
    }, 1000);
    
    function myTimer() {
      var d = new Date();
      document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    }

  return (
    <div className='topStatContainer'>
        <p>Karan <br /> 000019</p>
        <p>{section}</p>
        <p>Section <br /> {sectionNo}-7</p>
        <p >Time <br/> <span id='clock'></span></p>
    </div>
  )
}

export default TopStats