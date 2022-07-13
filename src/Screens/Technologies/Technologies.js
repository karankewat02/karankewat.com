import React from "react";
import "./Technologies.css";
import {cloud1,cloud3,grass3} from '../../imgAsset'

function Technologies() {
  return (
    <div style={{position:'relative'}}>
      <div className="technologies">
      <img className="cloud1" src={cloud1} alt="" />           
      <img className="cloud3" src={cloud3} alt="" />           
      <img className="cloud1-2" src={cloud1} alt="" />  
      <img className="grass3" src={grass3} alt="" />  
        <h1 style={{marginBlock:'1rem',textAlign:'center'}}>Technologies Worked on</h1>
        <div className="lang">
          <p>Languages</p>
          <div>
            <p>C</p>
            <p>C++</p>
          </div>
        </div>


        <div className="web">
          <p>Web Development</p>
          <div>

            <div>
              <p>Fornt-End</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJS</li>
              </ul>
            </div>

            <div>
              <p>Back-End</p>
              <ul>
                <li>PHP</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>FireBase</li>
              </ul>
            </div>

            <div>
              <p>Database</p>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

          </div>   
        </div>


        <div className="app">
          <p>App Development</p>
          <div>React-Native</div>
        </div>

      </div>
    </div>
  );
}

export default Technologies;
