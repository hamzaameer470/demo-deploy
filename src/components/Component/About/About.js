import React from 'react';
import ParallaxText from '../ParallaxText/ParallaxText';
import './About.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about" id='aboutID'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left">
                            <h2 className='f-os'>About Me</h2>
                            <div className="hr"></div>
                            <div className="content f-po">
                                <p>Hello! I am Ameer Hamza, a passionate software engineer with a deep-rooted love for crafting innovative solutions using cutting-edge technologies. With professional expertise in JavaScript and React, I specialize in building interactive and dynamic web applications that provide seamless user experiences. As a full stack developer, I am well-versed in both front-end and back-end technologies, including Firebase for real-time data synchronization and Python for server-side development. Additionally, my strong understanding of user experience design principles allows me to create visually appealing and intuitive interfaces that captivate users and drive engagement.</p>
                                <p>With a creative flair and problem-solving skills, I push boundaries in software development. I bring a unique perspective to each project, combining expertise in JavaScript, React, Firebase, Python, and UX design. As a blockchain enthusiast, I'm intrigued by decentralized technologies and constantly explore ways to leverage them. Let's collaborate and create something extraordinary!</p>
                                <div className="left-btn">
                                    {/* <Link to="/files/resume.pdf" target="_blank" download><button>DOWNLOAD MY RESUME</button></Link> */}
                                    <a href="#contactID"><button>HIRE ME</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="right">
                            <h3 className='f-os'>About My Skills</h3>
                            <div className="hr"></div>
                            <div className="content">

                                <div className="item">
                                    <h4 className='f-os'>PRIMARY SKILLS ON</h4>
                                    <ul>
                                        <li><img src={require("../../../images/icons/javascript.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/reactJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/nodeJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/expressJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/python.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/cpp.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/html5.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/css.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/bootstrap.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/dart.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/flutter.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/firebase.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/github.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/figma.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/illustrator.png")} alt="" /></li>



                                    </ul>
                                </div>
                                <div className="item">
                                    <h4 className='f-os'>SECONDARY SKILLS ON</h4>
                                    <ul>
                                        <li><img src={require("../../../images/icons/jquery.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/Redux.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mysql.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/solidity.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/tailwind.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/wordpress.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/chrome.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/pinterest.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/skype.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mui.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mongodb.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/aws.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/azure.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/docker.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/premiere.png")} alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-text">
                        <ParallaxText baseVelocity={-5}>Crafting engaging user experiences with React 's magic</ParallaxText>
                        <ParallaxText baseVelocity={5}>Building the web front to back like art</ParallaxText>
                        <ParallaxText baseVelocity={-5}>Unlocking decentralized possibilities with blockchain expertise</ParallaxText>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;