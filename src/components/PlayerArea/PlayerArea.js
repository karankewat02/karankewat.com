import React from 'react'
import './PlayerArea.css'

import still from '../../assets/images/playerStill.png'
import Move from '../../assets/images/playerMove.gif'
import { useState } from 'react'
import { useEffect } from 'react'

function PlayerArea(props) {

    useEffect(()=>{
        setPlayerState(props.move)
    },[props])

    const [playerState,setPlayerState] = useState(true)

  return (
    <div className='playerName'>
        <img src={playerState?Move:still} alt="Still" />
    </div>
  )
}

export default PlayerArea