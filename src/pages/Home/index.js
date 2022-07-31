import React from 'react';
import HeaderHome from '../../components/HeaderHome'; 
import Banner from '../../pages/Banner';
import About from '../../pages/About';
import Offer from '../../pages/Offer';
import Footer from '../../pages/Footer';

function Home() {
    return (
        <div>
            <HeaderHome/>
            <Banner/>
            <About/>
            <Offer/>
            <Footer/>
        </div>
    );
}

export default Home;
