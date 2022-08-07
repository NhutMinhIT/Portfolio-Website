import React from 'react'
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopfy from '../../img/Shopify.png';
import Facebook from "../../img/Facebook.png";
import { motion } from 'framer-motion';

const Works = () => {
    const transiton = { dura: 2, type: 'spring' }
    return (
        <div className="works">
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of pringting Lorem
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing text of printing
                    <br />
                    Lorem ispum is simpley dummy text
                </spane>
                <button className="button s-button">Here Me</button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/*Right Slide */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: "3.5", type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} />
                    </div>{""}
                    <div className="w-secCircle">
                        <img src={Shopfy} />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} />
                    </div>
                    {/*background Circle */}

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works