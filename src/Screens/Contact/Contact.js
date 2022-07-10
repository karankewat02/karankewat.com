import React from 'react'
import './Contact.css'

function Conatct() {
  return (
    <div>
      <div className="contact">
        <h1 style={{marginBlock:'1rem',textAlign:'center'}}>Contact Me</h1>

        <div className="socialLink">

            <a href="http://" target="_blank" rel="noopener noreferrer"><div><i className="fa-brands fa-instagram"></i></div></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><div><i className="fa-brands fa-github"></i></div></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><div><i className="fa-brands fa-linkedin"></i></div></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><div><i className="fa-solid fa-envelope"></i></div></a>

        </div>
        <h1 style={{fontSize:'1rem', marginBlock:'1rem',textAlign:'center'}}>or</h1>
        <div className="form">
          <form action="">
            <input type="text" placeholder='Email/Phone no.' name='ContactDetails'/> <br />
            <textarea rows={9}  placeholder='Message' name='message'/> <br />
            <input type="submit" value="Send" /> <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Conatct