import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion'


const Intro = () => {

    const transiton = { dura: 2, type: 'spring' }

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Arew Thomas</span>
                    <span>Frontend Developer with high
                        level of experience in web designing
                        and development, producting the
                        Quality work </span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <img src={Github} alt="github" />
                    <img src={LinkedIn} alt="linkedIn" />
                    <img src={Instagram} alt="instagram" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transiton={transiton}
                    src={glassesimoji} alt='' />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transiton}
                    style={{ top: '-4%', left: '68%' }}
                    className='floating-div'
                >

                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transiton}
                    style={{ top: '16rem', left: '0rem' }}
                    className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/*blur divs */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur"
                    style={{
                        background: '#c1f5ff',
                        top: '15rem',
                        width: '20rem',
                        height: '11rem',
                        left: '-7rem'
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default Intro