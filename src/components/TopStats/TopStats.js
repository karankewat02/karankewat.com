import React from 'react'
import {useState,useEffect} from 'react'
import './TopStats.css'

function TopStats(props) {

  const [section,setSection] = useState('Home')
  const [sectionNo,setSectionNo] = useState(1)
  useEffect(
    ()=>{
      setSection(props.section)
      setSectionNo(props.sectionNo)
    }
    ,[props]
    )

  // function currentTime() {
  //   let date = new Date(); 
  //   let hh = date.getHours();
  //   let mm = date.getMinutes();
  //   let ss = date.getSeconds();
  //   let session = "AM";
  
  //   if(hh === 0){
  //       hh = 12;
  //   }
  //   if(hh > 12){
  //       hh = hh - 12;
  //       session = "PM";
  //    }
  
  //    hh = (hh < 10) ? "0" + hh : hh;
  //    mm = (mm < 10) ? "0" + mm : mm;
  //    ss = (ss < 10) ? "0" + ss : ss;
      
  //    let time = hh + ":" + mm + ":" + ss + " " + session;
  
  //   document.getElementById("clock").innerText = time; 
  //   let t = setTimeout(function(){ currentTime() }, 1000);
  // }
  // currentTime();

  return (
    <div className='topStatContainer'>
        <p>Karan <br /> 000019</p>
        <p>{section}</p>
        <p>Section <br /> {sectionNo}-7</p>
        <p id='clock'>Time</p>
    </div>
  )
}

export default TopStats