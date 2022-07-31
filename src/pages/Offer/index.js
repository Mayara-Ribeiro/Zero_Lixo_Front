import React from 'react'
import './style.css';


const Offer = () => {
    return (
        <div className='offer' id='offer' >
          
            <div className='offer-container'>
                <div>
                    <p className ='offer-subtitle'>Nossa Comunidade</p>
                    <h2 className='offer-title'>Catacterísticas da Comunidade</h2>
                    <p className='offer-description'>O que o Zera Lixo oferece:</p>
                </div> 

        <div className="moradores">
        <h4  className='cor'>Moradores</h4>
        <p>Moradores do condomínio, colaboradores da horta.</p>
        </div>
        <div className="condominio">
         <h4  className='cor'>Condomínios</h4>
        <p>Condominios que possuem o sistema do Zera Lixo em seu ambiente.</p>
        </div>
       <div className="tasks">
        <h4  className='cor'>Tasks da horta</h4>
        <p>Tarefas para se fazer na horta.</p>
        </div>
        
        <div className="horta">
        <h4 className='cor' >Horta vertical</h4>
        <p>Horta vertical adaptável ao espaço.</p>
        </div>

        <div className="sistema"> 
        <h4  className='cor'>Sistema de troca de pontos</h4>
        <p>Sistema de troca de pontos por produtos na horta.</p>
        </div>

        <div className="composteiras">
        <h4  className='cor' >Composteiras</h4>
        <p>Composteiras com minhocário.</p>
        </div>
      
       </div>

 </div > 


    )
}

export default Offer;