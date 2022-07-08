import React from 'react'
import { useState } from 'react'

import Home from './Screens/Home/Home'
import About from './Screens/About/About'

import './App.css'

import WalkPath from './components/WalkPath/WalkPath'
import PlayerArea from './components/PlayerArea/PlayerArea'
import TopStats from './components/TopStats/TopStats'
import Education from './Screens/Education/Education'

function App() {

  return (
    <>
      <TopStats/>
      <div className='screenConatiner'>
        {/* <Home/>
        <About/> */}
        <Education/>
      </div>
      <PlayerArea move={true}/>
      <WalkPath/>
    </>
  )
}

export default App