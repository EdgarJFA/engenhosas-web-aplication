import React from 'react';
import logoImg from '../../assets/images/engenhosas_logo.png';
import backImg from '../../assets/images/eng_background.jpg';

import './styles.css';

function Home () {
    return (
        <div className="min-h-screen flex">
        <div className="hidden md:block w-1/2 bg-blue-500 relative"
        // style={{ backgroundImage: `url(${backImg})` }}
        >
            <div className="absolute w-full h-full" />
            <img src={backImg} alt="Moz connect Nkaze" className="h-screen w-screen object-cover"/>
        </div>
        <div className="flex-1 min-h-0">
            <div className="h-full px-8 flex flex-col items-center justify-center">
                <img className="h-48 pb-4" src={logoImg} alt="logoEngenhosas"/>
                <strong>Empoderando Mulheres em África</strong>
                <p className="mt-10">A nossa pagína web encontra-se em construção</p>
                <a href="https://chat.whatsapp.com/IHhkqMi4IQQ7gvdBdEMzgK" className="flex bg-green-600 py-2 px-4 h-10 rounded mt-10">
                    <strong className="text-white text-bold">Conecte-se no nosso último projecto</strong>
                </a>
            </div>
        </div> 
        </div>
    )
}

export default Home;