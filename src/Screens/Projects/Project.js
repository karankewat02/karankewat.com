import React from 'react'
import './Projects.css'
import {cloud1,cloud2,mountainB} from '../../imgAsset'

function Project() {
  return (
    <div style={{position:'relative'}}>
        <div className='projects'>
            <img className="cloud1" src={cloud1} alt="" />           
            <img className="cloud2" src={cloud2} alt="" />           
            <img className="mountainB" src={mountainB} alt="" />  
            <h1 style={{marginBlock:'1rem',textAlign:'center'}}>Projects</h1>
            <div className="projectContainer">

                <div className="projectCard">
                    <div className="img"></div>
                    <div></div>
                    <div className='details'>
                        <h3>Project Titile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis esse similique cum aut sapiente pariatur deleniti repudiandae voluptate laborum non, vel facilis fuga eum maiores rem officia enim dolorum?</p>
                        <div className="Button">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Explore</a>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="img"></div>
                    <div></div>
                    <div className='details'>
                        <h3>Project Titile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis esse similique cum aut sapiente pariatur deleniti repudiandae voluptate laborum non, vel facilis fuga eum maiores rem officia enim dolorum?</p>
                        <div className="Button">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Explore</a>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="img"></div>
                    <div></div>
                    <div className='details'>
                        <h3>Project Titile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis esse similique cum aut sapiente pariatur deleniti repudiandae voluptate laborum non, vel facilis fuga eum maiores rem officia enim dolorum?</p>
                        <div className="Button">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Explore</a>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="img"></div>
                    <div></div>
                    <div className='details'>
                        <h3>Project Titile</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis esse similique cum aut sapiente pariatur deleniti repudiandae voluptate laborum non, vel facilis fuga eum maiores rem officia enim dolorum?</p>
                        <div className="Button">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Explore</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Project