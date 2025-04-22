import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    {/*<img src={footer_logo}></img>*/}
                    <p>I currently have two years of experience coding, and I want to experience what it is like working within my field.</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={user_icon}></img>
                        <input type='email' placeholder='Enter your email'></input>
                    </div>
                    <div className='footer-subscribe'>
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>&copy; 2025 Alejandro Medina-Nu&ntilde;ez. All rights reserved.</p>
                <div className='footer-bottom-right'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer