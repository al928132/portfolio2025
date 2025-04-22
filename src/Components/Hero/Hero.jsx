import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img}></img>
            <h1><span>I'm Alejandro Medina-Nu&ntilde;ez,</span> frontend developer based in USA.</h1>
            <p>Front-end Web Designer</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me!</AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero