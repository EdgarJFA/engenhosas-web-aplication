import React from 'react';
import logoImg from '../../assets/icons/solea.png';

import './styles.css';

function Home () {
    return (
        <div id="container">
            <div className="heart"></div>
            <div className="text">
                <img className="logo" src={logoImg} alt="logoEngenhosas"/>
                <h3>O Sitio web das Engenhosas está em desenvolvimento... Obrigado por esperar</h3>
                <h3>Voltamos em breve</h3>
            </div>
        </div>
    )
}

export default Home;