import React, {useEffect} from 'react'
import './Home.css'
import {cloud1,mountainB,grass3} from '../../imgAsset'

function Home() {


  return (
    <div className='home'>
      <img className='cloud1' src={cloud1} alt="cloud" />
      <img className='mountainB' src={mountainB} alt="cloud" />
      <img className='grass3' src={grass3} alt="cloud" />
      <div className="heroSection">
        <span>Welcome to</span><p>Karan's Portfolio</p>
      </div>
      <div className="instruction">
        <p>Press 'D' or '→' to move forward</p>
        <p>Press 'A' or '←' to move Backward</p>
        <p>Press 'Space' to jump or select</p>
      </div>
    </div>
  )
}

export default Home