import React from "react";
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {

    const mobile = window.innerHeight <= 768 ? true : false;
    const[menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header">
            <img src={Logo} className="logo"></img>
            {menuOpened === false && mobile === true?(
                <div style={{marginTop:'10px'}} onClick={()=>setMenuOpened(true)}><img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} /></div>
                ) : (
                <ul className="header-menu">
                    <li><Link to="home" activeClass="active" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Home</Link></li>
                    <li><Link to="program" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Program</Link></li>
                    <li><Link to="reason" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Why us</Link></li>
                    <li><Link to="plans" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Plans</Link></li>
                    <li><Link to="testimonials" spy={true} smooth={true} onClick={()=>setMenuOpened(false)}>Testinomial</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Header;