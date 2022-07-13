import React, { useEffect } from "react";
import "./About.css";
import {cloud1,cloud2,grass2,mountainS} from '../../imgAsset'

function About() {
  const typing = () => {
    let i = 0;
    let txt =
      "I am a 2nd year B Tech student. I am pursuing my Bachelor's degree in computer science, from the Gyan Ganga Institute Of Technology and Science. I have done my schooling at St. Gabriels Sen. Sec. School Jabalpur. From the beginning of my 1st year in college, I had an overwhelming interest toward's the web and how it works. So taking my interest forward worked on my web development skills. My grind hasn't stopped I am still working on skills to date."; /* The text */
    const speed = 50; /* The speed/duration of the effect in milliseconds */
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  };

  return (
    <div className="about"> 
      <img className="cloud1" src={cloud1} alt="" />           
      <img className="cloud2" src={cloud2} alt="" />           
      <img className="grass2" src={grass2} alt="" />           
      <img className="mountainS" src={mountainS} alt="" />           
      <h1 style={{marginBlock:'1rem',textAlign:'center'}}>About me</h1>
      <div className="about">
        <div className="button" onClick={typing}></div>
        <p id="text"></p>
      </div>
    </div>
  );
}

export default About;
