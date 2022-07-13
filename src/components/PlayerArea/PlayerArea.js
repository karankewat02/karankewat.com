import React from 'react'
import './PlayerArea.css'

import still from '../../assets/images/playerStill.png'
import Move from '../../assets/images/playerMove.gif'
import { useState } from 'react'
import { useEffect } from 'react'

function PlayerArea(props) {

    const [playerState,setPlayerState] = useState(false)
    const [backward,setBackward] = useState(false)
    const [jump,setJump] = useState(false)
  
    useEffect(()=>{
        setPlayerState(props.move)
        setJump(props.jumping)
        setBackward(props.backward)
    },[props])

  return (
    <div className='playerName'>
        <img className={`${jump?'jump':''} ${backward?'back':''} ${playerState?'movefront':""}`} src={playerState?Move:still} alt="Still" />
    </div>
  )
}

export default PlayerArea