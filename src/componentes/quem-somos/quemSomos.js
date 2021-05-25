import React from 'react';
import './quemSomos.css';
import agencia from './img/image-jussi.png'

function QuemSomos() {
  return (
    <div className="quemSomos">
        <div className="container">
            <div className='quemSomos--esquerda'>
                <h2 className="quemSomos__title">Olá, somos a Jüssi</h2>
                <p className="quemSomos__text">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                <a className="quemSomos__btn" href="javascript:void(0)">Conheça a Jüssi</a> 
            </div>
            <div className="quemSomos--direita">
                <img className="quemSomos__img" src={agencia} />
            </div>
        </div>
    </div>
  );
}

export default QuemSomos;
