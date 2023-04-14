import React from 'react';
import './Portfolio.scss';
import { BiLink } from 'react-icons/bi';
import { BsImage } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { FacebookShareButton } from 'react-share';
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <section className='portfolio' id="portfolioID">
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className='f-os sec-title'>PORTFOLIO</motion.h2>
                <div className="hr"></div>
                <div className="row gx-0 gx-md-4 gx-lg-5">
                    <div className="col-md-4 col-sm-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/powerX.png")} alt="" />
                                    <p class="title f-po">PowerX UI</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="PowerX App" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://gymx-moosa-5b4cd7.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/GymX"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </motion.div>
                        <div className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/arch.png")} alt="" />
                                    <p class="title">WolfStreet</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="WolfStreet" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://moosa-wolf-street.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/WolfStreet"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.1 }} className="card-b">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/owls social app.png")} alt="" />
                                    <p class="title">Owls | Social App</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="Owls | Social App" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://owls-social-app.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/FacebookCloneReact"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>
                        </motion.div>
                        <div className="card-b">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/sunny_side.png")} alt="" />
                                    <p class="title">Sunny Side</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="Sunny Side" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://moosa-sunny-side.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/sunny-side"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 content">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.2 }} className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/loopstudio.png")} alt="" />
                                    <p class="title">Loop Studio</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="Loop Studio" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://moosa-loop-studio.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/loopsStudio"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </motion.div>
                        <div className="card-a">
                            <div class="card">
                                <div class="card-info">
                                    <img src={require("../../../images/portfolio/room.png")} alt="" />
                                    <p class="title">Room | Furniture</p>
                                    <span><BsImage /></span>
                                </div>
                                <div class="card-bio">
                                    <FacebookShareButton quote="Room | Furniture" hashtag={"#webdevelopment"} url={"https://www.facebook.com/"}><span><GrFacebookOption className='icon' /></span></FacebookShareButton>
                                    <a target={'_blank'} href="https://moosa-wolf-street.netlify.app/"><span><BiLink className='icon' /></span></a>
                                    <a target={'_blank'} href="https://github.com/MoosaRaza2/WolfStreet"><span><FaGithubAlt className='icon' /></span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;