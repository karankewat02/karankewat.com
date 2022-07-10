import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="heroSection">
        <span>Welcome to</span><p>Karan's Portfolio</p>
      </div>
      <div className="instruction">
        <p>Press 'D' or '→' to move forward</p>
        <p>Press '←' to move Backward</p>
        <p>Press 'Space' to jump or select</p>
      </div>
    </div>
  )
}

export default Home