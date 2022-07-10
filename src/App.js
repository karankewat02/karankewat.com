import React from 'react'
import { useState } from 'react'


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

// import grass1 from './assets/images/grass1.png'
// import grass2 from './assets/images/grass2.png'
// import grass3 from './assets/images/grass3.png'

// import cloud1 from './assets/images/cloud1.png'
// import cloud2 from './assets/images/cloud2.png'
// import cloud3 from './assets/images/cloud3.png'

// import mountainS from './assets/images/mountainS.png'
// import mountainB from './assets/images/mountainB.png'

function App() {

  const [moving,SetMoving] = useState(false)
  const [backward,setbackward] = useState(false)

  const [jumping,setJumping] = useState(false)
  const [section,setSection] = useState('Home')
  const [sectionNo,setSectionNo] = useState(1)




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

  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section('Home');sectionNo(1)})
  // document.querySelector('.about').addEventListener('onmouseenter',()=>{section('About');sectionNo(2)})
  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section(Home);sectionNo(3)})
  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section(Home);sectionNo(4)})
  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section(Home);sectionNo(5)})
  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section(Home);sectionNo(6)})
  // document.querySelector('.home').addEventListener('onmouseenter',()=>{section(Home);sectionNo(7)})
  
  return (
    <>
      <TopStats sectionNo={sectionNo} section={section}/>
      
      <div className='screenConatiner'>
        <Home/>
        <About/>
        <Education/>
        <Technologies/>
        <Project/>
        <Conatct/>
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