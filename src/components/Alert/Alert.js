import React, { useEffect, useState } from 'react'
import './Alert.css'

function Alert(props) {

    const [msg,setMsg]= useState('Text here')
    useEffect(()=>{
        setMsg(props.msg)
        document.querySelector('.Alert').classList.add('show');
        setTimeout(()=>document.querySelector('.Alert').classList.remove('show'),5000)
    },[props])

  return (
    <div className='Alert'> {msg}</div>
  )
}

export default Alert