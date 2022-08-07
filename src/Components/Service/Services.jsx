import React from 'react'
import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { motion } from 'framer-motion';

const Services = () => {
    const transiton = { dura: 2, type: 'spring' }
    return (
        <div className="services" id="Services">
            {/* Left Side*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of ptringting Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>

                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/*Right Side*/}
            <div className="cards">
                <motion.div
                    initial={{ left: '25%' }}
                    whileInView={{ left: '14rem' }}
                    transition={transiton}
                    style={{
                        left: '14rem',
                    }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe Illstrator, Adobe xd"}
                    />
                    {/*Second Card*/}
                </motion.div>
                <div style={{
                    top: "12rem",
                    left: '-4rem',

                }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React,Figma, Sketch, Photoshop, Adobe Illstrator, Adobe xd"}
                    />

                </div>
                {/*Third Card*/}
                <div style={{
                    top: '18rem',
                    left: '12rem'

                }}>
                    <Card
                        emoji={Humble}
                        heading="UI/UX"
                        detail="Lorem ispum dummy text
                        are usually use in section 
                        where we need some random text"
                    />

                </div>
                <div className='blur s-blur2'
                    style={{
                        background: 'var(--purple)'
                    }}>

                </div>
            </div>
        </div >
    )
}

export default Services;