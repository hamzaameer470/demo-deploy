import React, { useRef } from 'react';
import './Contact.scss';
import { RxTwitterLogo } from 'react-icons/rx';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Alert from '@mui/material/Alert';
const Contact = () => {
    const form = useRef();
    const [err, setError] = React.useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4x185fh', 'template_al6n7pe', form.current, 'NSvU4Bo6-sPgvxg41')
            .then((result) => {
                console.log(result.text);
                setError(true)
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <section className='contact' id="contactID" style={{ marginTop: '55px' }}>
            <div className="container">
                <motion.h2 whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="f-os sec-title">CONTACT ME</motion.h2>
                <div className="hr"></div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left-card f-po">
                            <div className="t-img">
                                <img src="https://i.pinimg.com/564x/3d/c7/6d/3dc76db0c5ed359dec38024a566178c3.jpg" alt="" />
                            </div>
                            <h4 className='f-os'>Ameer Hamza Usman</h4>
                            <span>FULL STACK WEB DEVELOPER</span>
                            <p>Open to collaborating on exciting projects remotely!</p>
                            <div className="contacts">
                                <h5>Phone: <span> +92 307 860 9594</span></h5>
                                <h5>Email: <span> hamzaameer470@gmail.com</span></h5>
                            </div>
                            <h6>FIND ME ON</h6>
                            <ul>
                                <a target={'_blank'} href="https://www.linkedin.com/in/hamzaameer470/"><li><RxTwitterLogo /></li></a>
                                <a target={'_blank'} href="https://www.linkedin.com/in/hamzaameer470/"><li><FiFacebook /></li></a>
                                <a target={'_blank'} href="https://www.linkedin.com/in/hamzaameer470/"><li><FiLinkedin /></li></a>
                            </ul>

                        </motion.div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-7">
                        <motion.form whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} ref={form} className="right-card">
                            <div>
                                <h3>Got a <span>PROJECT IN MIND?</span></h3>
                                <h3>Let's Talk!</h3>
                            </div>
                            <div className="double-c">
                                <div className="item">
                                    <TextField name="user_name" label="YOUR NAME" variant="outlined" />
                                </div>
                                <div className="item">
                                    <TextField type={'number'} name="user_phone" label="PHONE NUMBER" variant="outlined" />
                                </div>
                            </div>
                            <div className="item">
                                <TextField name="user_email" label="EMAIL" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="subject" label="SUBJECT" variant="outlined" />
                            </div>
                            <div className="item">
                                <TextField name="message" className="text-field" multiline label="MESSAGE" variant="outlined" />
                            </div>
                            {
                                err && (
                                    <Alert severity="success">Email sent</Alert>
                                )
                            }
                            <button onClick={sendEmail} className='f-po'>SEND MESSAGE</button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;