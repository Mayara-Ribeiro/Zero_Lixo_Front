import React from 'react';
import Img1 from '../../assets/images/img-1.jpeg';
import Img3 from '../../assets/images/img-3.jpeg';
import Img4 from '../../assets/images/img-4.jpeg';
import './style.css';


const About = () => {
    return (
        <div className='about' id='about' >
          
            <div className='about-container'>
             
                <div>
                    <h6 className ='about-subtitle'>O que é o Zera Lixo?</h6>
                    <h2 className ='about-title'>Porque ter o Zera Lixo em seu condomínio?</h2>
                    <p className ='about-description'>
                        Segundo a ONU nós estamos numa corrida contra uma 
                        catástrofe climática e o aumento de lixo nos aterros 
                        sanitários contribui na piora da nossa situção.
                    </p>
                    <ul className ='about-list'>
                        <li>Composteira com minhocários </li>
                        <li>Horta vertical </li>
                        <li>Sistema online de troca de pontos por produto</li>
                    </ul>
                </div>

            <img className='about-img1' src={Img1} alt='Img1' />
            <img className='about-img3' src={Img3} alt='Img3' />
            <img className='about-img4' src={Img4} alt='Img4' />


            </div>

        </div >


    )
}

export default About;