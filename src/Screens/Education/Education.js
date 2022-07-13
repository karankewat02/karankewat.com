import React from "react";
import "./Education.css";
import {cloud1,cloud3,grass3,grass1} from '../../imgAsset'

function Education() {
  const sclDisplay = () => {
    const sclDetails = document.querySelector("#sclDetails");
    sclDetails.classList.toggle("visible");
  };
  const clgDisplay = () => {
    const sclDetails = document.querySelector("#clgDetails");
    sclDetails.classList.toggle("visible");
  };

  return (
    <div style={{position:'relative'}}>
      <div className="education">
      <img className="cloud1" src={cloud1} alt="" />           
      <img className="cloud3" src={cloud3} alt="" />           
      <img className="grass3" src={grass3} alt="" />  
      <img className="grass1" src={grass1} alt="" />  
        <h1 style={{marginBlock:'1rem',textAlign:'center'}}>Education Details</h1>
        <div className="options">
          <div>
            <div className="button" onClick={sclDisplay}></div>
            <p>Schooling</p>
            <div id="sclDetails" className="detail">
              St. Gabries Sen. Sec. School Ranjhi, Jabalpur. (Class 1 to 12)
              <br />
              <ul>
                <li>10th - 84%</li>
                <li>12th PCM - 74%</li>
              </ul>
              <a
                href="https://www.gabrielsjbp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Know More</button>
              </a>
            </div>
          </div>
          <div>
            <div className="button" onClick={clgDisplay}></div>
            <p>Graduation</p>
            <div id="clgDetails" className="detail">
              Gyan Ganga institue of Technology and Sciences (Btech - Computer
              Science)
              <br />
              <ul>
                <li>1st year CGPA - 9.4</li>
                <li>2nd year CGPA - 9.54</li>
                <li>3nd year CGPA - </li>
                <li>4nd year CGPA - </li>
              </ul>
              <a
                href="https://ggits.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Know More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
