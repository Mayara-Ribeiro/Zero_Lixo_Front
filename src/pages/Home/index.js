import React from 'react';
import HeaderHome from '../../components/HeaderHome'; 
import Banner from '../../pages/Banner';
import About from '../../pages/About';
import Offer from '../../pages/Offer';

function Home() {
    return (
        <div>
            <HeaderHome/>
            <Banner/>
            <About/>
            <Offer/>
        </div>
    );
}

export default Home;
