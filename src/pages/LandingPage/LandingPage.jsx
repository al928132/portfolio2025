import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const FULL_NAME = "Alejandro Medina-Nu\u00f1ez";

const LandingPage = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < FULL_NAME.length) {
                setDisplayedText(FULL_NAME.slice(0, i + 1));
                i++;
            } else {
                setTypingDone(true);
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="landing">
            <div className="landing-content">
                <p className="landing-greeting">Welcome to my portfolio</p>
                <h1 className="landing-name">
                    <span className="landing-name-text">{displayedText}</span>
                    <span className={`landing-cursor${typingDone ? ' landing-cursor--blink' : ''}`}>|</span>
                </h1>
                <p className="landing-role">Front-end Web Designer &amp; Developer</p>

                <nav className="landing-nav">
                    <Link to="/about" className="landing-nav-card">
                        <span className="landing-nav-icon">&#9786;</span>
                        <span className="landing-nav-label">About Me</span>
                        <span className="landing-nav-desc">Learn about my background</span>
                    </Link>
                    <Link to="/portfolio" className="landing-nav-card">
                        <span className="landing-nav-icon">&#9726;</span>
                        <span className="landing-nav-label">Portfolio</span>
                        <span className="landing-nav-desc">Browse my projects</span>
                    </Link>
                    <Link to="/contact" className="landing-nav-card">
                        <span className="landing-nav-icon">&#9993;</span>
                        <span className="landing-nav-label">Contact</span>
                        <span className="landing-nav-desc">Get in touch with me</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default LandingPage;
