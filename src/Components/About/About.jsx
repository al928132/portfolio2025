import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_img.jpeg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <img src={theme_pattern}></img>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_image}></img>
                </div>
                <div className='about-right'>
                    <div className='about-p'>
                        <p>I am a first-generation student with a degree in Digital Media - Web and Interactive Media. I am currently looking to pursue a career in marketing focusing on social media. I have five years of customer service experience from being a server to being a retail store manager. Additionally, I have experience working with students as a Substitute teacher.</p>
                        <p>I am proficcient with Adobe Photoshop and Illustrator, working with the programs since high school, I gained two certifications for the programs. I have also worked with Hootsuite and gained a certification.</p>
                        <p>I have experience with designing and creating websites from scratch using VSCode. As well as </p>
                    </div>
                    {/*<div className='about-skills'>
                        <div className='about-skill'>
                            <p>HTML & CSS</p><hr style={{ width: "72%" }} />
                            <p>React JS</p><hr style={{ width: "15%" }} />
                            <p>JavaScript</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>*/}
                </div>
            </div>
            <div className='about-acheivents'>
                <div className='about-acheivement'>
                    <h1>TWO</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-acheivement'>
                    <h1>15+</h1>
                    <p>PROJECTS</p>
                </div>

            </div>
        </div>
    )
}

export default About