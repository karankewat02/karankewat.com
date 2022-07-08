import React, { useEffect } from "react";
import "./About.css";


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
    <div>
      <div className="about">
        <p id="text"></p>
        <div className="button" onClick={typing}></div>
      </div>
    </div>
  );
}

export default About;
