import React from 'react';
import About from '../../Component/About/About';
import Avater from '../../Component/Avater/Avater';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/NavBar/Navbar';
import Portfolio from '../../Component/Portfolio/Portfolio';
import Testimonial from '../../Component/Testimonial/Testimonial';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home-bg">
                <Navbar></Navbar>
                <Avater></Avater>
                <About></About>
                <Portfolio></Portfolio>
                {/* <Testimonial></Testimonial> */}
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;