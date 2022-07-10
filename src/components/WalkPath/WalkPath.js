import React from 'react'
import './WalkPath.css'
import { useState } from 'react'
import { useEffect } from 'react'

function WalkPath(props) {

  const [pathState,setPathState] = useState(false)
  const [backward,setBackward] = useState(false)
  useEffect(()=>{
    setPathState(props.move)
    setBackward(props.backward)
  },[props])

  return (
    <div className={`walkPath ${pathState?'animated':''} ${backward?'back':''}`}></div>
  )
}

export default WalkPath