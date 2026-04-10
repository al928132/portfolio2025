import React, { useEffect, useState } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const fullText = "Alejandro Medina-Nuñez"
const spanEnd = "Alejandro Medina-Nuñez,".length

const Hero = () => {
    const [typed, setTyped] = useState(0)

    useEffect(() => {
        if (typed >= fullText.length) return
        const id = setTimeout(() => setTyped(prev => prev + 1), 55)
        return () => clearTimeout(id)
    }, [typed])

    const isDone = typed >= fullText.length
    const spanText = fullText.slice(0, Math.min(typed, spanEnd))
    const restText = typed > spanEnd ? fullText.slice(spanEnd, typed) : ''

    return (
        <div id='home' className="hero">
            <h1>
                <span className="hero-gradient">{spanText}</span>
                {restText}
                {!isDone && <span className="hero-cursor"></span>}
            </h1>
            <p>Branding, Marketing, Social Media</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me!</AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero
