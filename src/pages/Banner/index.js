import React from 'react';
import Image from '../../assets/images/img-2.jpeg';
import './style.css';
import Button from 'react-bootstrap/Button';


const Banner = () => {
    return (
        <div className='banner' id='banner' >
            <div className='banner-container'>
                <div>
                    <img className='banner-image' alt='banner' src={Image} />
                </div>

                <div>
                    <h2 className='banner-title'>Transforme seu lixo orgânica em vida!</h2>
                    <p className='banner-description'>O lixo orgânico que você produz contribui
                     para um menor tempo de vida na terra. Mas o seu condomínio pode fazer diferente.
                    </p>
                    <Button className='buttonCond' variant="success">Quero no meu condominio</Button>{' '}
                    <Button className='buttonSaber' variant="outline-secondary">Saber mais</Button>{' '}

                </div>
            </div>    

           
        </div >


    )
}

export default Banner;