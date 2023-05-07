import React from 'react';
import './Top.css';
import Header from '../Header/Header';
import heroimg from '../../assets/hero_image.png';
import heroimgBack from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion'; 
import NumberCounter from 'number-counter';

const Top = () => {
    const transition = {type:'spring',duration:3}
    const mobile = window.innerHeight<=768?true:false;
    return (
        <div className='top' id="home">
            <dib className="blur top-blur"></dib>
            <div className="left-h">
                <Header />
                {/* The Best Ad */}
                <div className="best-ad">
                <motion.div
                    initial={{left: mobile?'157px':'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}
                    ></motion.div>
                    {/* <div></div> */}
                    <span>The best fitness club in the town.</span>
                </div>

                {/* The Hero Hadding */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>My name is Shubham, in here we will help you to shape and build your ideal body and live up your life to fullest.</span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span><NumberCounter start={100} end={150} delay='4' preFix="+"/></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span><NumberCounter start={800} end={999} delay='4' preFix="+"/></span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={0} end={55} delay='4' preFix="+"/></span>
                        <span>fitnress programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                {/* right-h */}
                <button className='btn'>Join Now</button>
                <motion.div 
                transition={transition}
                initial={{right:'-1rem'}}
                whileInView={{right:"4rem"}}
                className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={heroimg} alt="" className='hero_image'/>
                <motion.img initial={{right:'11rem'}} whileInView={{right:'24rem'}} transition={transition} src={heroimgBack} alt=""  className='hero_image_back'/>

                {/* Colories Detail */}
                <motion.div
                initial={{right:'57rem'}}
                whileInView={{right:'40rem'}}
                transition={transition}
                className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>262 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Top
