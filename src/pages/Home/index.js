import React from 'react';
import HeaderHome from '../../components/HeaderHome'; 
import Banner from '../../pages/Banner';
import About from '../../pages/About';

function Home() {
    return (
        <div>
            <HeaderHome/>
            <Banner/>
            <About/>
        </div>
    );
}

export default Home;
