import React, { useContext, useState } from 'react';
import './Navbar.scss';
import { motion } from "framer-motion";
import { DarkModeContext } from '../../utilities/darkModeContext';
import { OffCanvas } from 'react-offcanvas';
import { RiCloseCircleFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { OffCanvasMenu } from 'react-offcanvas';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const { toggle } = useContext(DarkModeContext);

    return (
        <nav className='navbar'>
            <div className="menu">
                <motion.label animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.5, type: 'spring' }} for="burger" className="burger">
                    <input id="burger" type="checkbox" onClick={() => setOpenNav(!openNav)} />
                    <span className='top'></span>
                    <span className='middle'></span>
                    <span className='bottom'></span>
                </motion.label>
                <GiHamburgerMenu className='nav-burger' onClick={() => setOpenNav(!openNav)} />
                <motion.ul animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring" }} className='f-po' >
                    <a href="#aboutID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring" }}>About</motion.li></a>
                    <a href="#serviceID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.1 }}>Services</motion.li></a> 
                    <a href="#portfolioID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.2 }}>Portfolio</motion.li></a>
                    <a href="#testimonialID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.3 }}>Testmonials</motion.li></a>
                    <a href="#contactID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.4 }}>Contact</motion.li></a>
                </motion.ul>
            </div>
            <div className="container position-relative">
                <div className="mode">
                    <label class="switch">
                        <input type="checkbox" onClick={toggle} />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            <OffCanvas
                width={200}
                transitionDuration={300}
                effect={"parallax"}
                isMenuOpened={openNav}
                position={"left"}
                style={{ background: "red" }}
            >
                <OffCanvasMenu
                    className='nav-offcanvas'
                >
                    <RiCloseCircleFill onClick={() => setOpenNav(!openNav)} className="off-close" />
                    <motion.ul animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring" }} className='f-po' >
                        <a href="#aboutID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring" }}>About</motion.li></a>
                        <a href="#serviceID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.1 }}>Services</motion.li></a>
                        <a href="#portfolioID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.2 }}>Portfolio</motion.li></a>
                        <a href="#testimonialID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.3 }}>Testmonial</motion.li></a>
                        <a href="#contactID"><motion.li animate={openNav ? { x: 0, opacity: 1, display: "flex" } : { x: 150, opacity: 0, display: "none" }} transition={{ type: "spring", delay: 0.4 }}>Contact</motion.li></a>
                    </motion.ul>
                    <div className="mode">
                        <label class="switch">
                            <input type="checkbox" onClick={toggle} />
                            <span class="slider"></span>
                        </label>
                    </div>

                </OffCanvasMenu>
            </OffCanvas>

        </nav>
    );
};

export default Navbar;