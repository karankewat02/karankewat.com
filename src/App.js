import React, { useEffect } from 'react'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint';

import Home from './Screens/Home/Home'
import About from './Screens/About/About'

import './App.css'

import WalkPath from './components/WalkPath/WalkPath'
import PlayerArea from './components/PlayerArea/PlayerArea'
import TopStats from './components/TopStats/TopStats'
import Education from './Screens/Education/Education'
import Technologies from './Screens/Technologies/Technologies'
import Project from './Screens/Projects/Project'
import Conatct from './Screens/Contact/Contact'
import Last from './Screens/Last/Last'
import Alert from './components/Alert/Alert';

function App() {

  const [moving,SetMoving] = useState(false)
  const [backward,setbackward] = useState(false)
  const [jumping,setJumping] = useState(false)

  const [section,setSection] = useState('Home')
  const [sectionNo,setSectionNo] = useState(1)

  useEffect(()=>{
      var audio = new Audio('https://vgmsite.com/soundtracks/super-mario-bros/jlgsgtpeof/01%20Running%20About.mp3');
      audio.loop = true;
      audio.play();
  },[])

  const [alertMsg,setAlertMsg] = useState('');
  useEffect(()=>{
    setTimeout(()=>setAlertMsg(''),5000)
  },[alertMsg])


  document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===68){
        SetMoving(true)
        document.querySelector('.screenConatiner').scrollLeft += 5
    }
    if(key===65){
        SetMoving(true)
        setbackward(true)
        document.querySelector('.screenConatiner').scrollLeft += -5
    }
    if(key===32){
        setJumping(true)
    }  
  }
  document.onkeyup = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===68){
        SetMoving(false)
    }
    if(key===65){
        SetMoving(false)
        setbackward(false)
    }
    if(key===32){
      setTimeout(()=>{setJumping(false)},550)
    }
  }   

  
  return (
    <>
      <TopStats sectionNo={sectionNo} section={section}/>

      {alertMsg===''?<></>:<Alert msg={alertMsg}/>}
      
      <div className='screenConatiner'>
          <Waypoint
            onEnter={() => {setSection('Home'); setSectionNo(1)}}
            horizontal={true}
            bottomOffset="50%"
          />
          <Home/>

          <Waypoint
            onEnter={() => {setSection('About'); setSectionNo(2);}}
            horizontal={true}
            bottomOffset="50%"
          />
          <Waypoint
            onEnter={() => {setAlertMsg('Click the tresure Box to know more')}}
            horizontal={true}
            bottomOffset="70%"
          />
        
          <About/>

          <Waypoint
            onEnter={() => {setSection('Education'); setSectionNo(3)}}
            horizontal={true}
            bottomOffset="50%"
          />

          <Education/>

          <Waypoint
            onEnter={() => {setSection('Technologies'); setSectionNo(3)}}
            horizontal={true}
            bottomOffset="50%"
          />

          <Technologies/>

          <Waypoint
            onEnter={() => {setSection('Project'); setSectionNo(4);setAlertMsg('Hover on the card to know more')}}
            horizontal={true}
            bottomOffset="50%"
          />

          <Project/>

          <Waypoint
            onEnter={() => {setSection('Contact'); setSectionNo(5)}}
            horizontal={true}
            bottomOffset="50%"
          />

          <Conatct/>

          <Waypoint
            onEnter={() => {setSection('Credits'); setSectionNo(6)}}
            horizontal={true}
            bottomOffset="50%"
          />
          <Last/>
      </div>
      <PlayerArea backward={backward} move={moving} jumping={jumping}/>
      <div>
        <WalkPath backward={backward} move={moving}/>
      </div>
    </>
  )
}

export default App