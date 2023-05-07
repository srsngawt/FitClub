import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
        <hr/>
       
        <div className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/shubham-sangawat-ba4b661b1/"><img src={Linkedin} alt="" /></a>
                <a href="https://www.instagram.com/shubhamr1415/"><img src={Instagram} alt="" /></a>
                <img src={Github} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer
