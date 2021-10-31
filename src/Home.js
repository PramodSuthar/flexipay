import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import HowSection from './HowSection';
import Aboutus from './Aboutus';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <HowSection />
            <Aboutus />
            <Services />
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;
