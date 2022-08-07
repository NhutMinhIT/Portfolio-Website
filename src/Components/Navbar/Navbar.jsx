import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle />

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                            <li>Service</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass="activeClass">
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass">
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact us
                </button>
            </div>
        </div>
    )

}
export default Navbar;