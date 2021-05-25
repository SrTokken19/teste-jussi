import React from 'react';
import './footer.css';
import logo from './img/wppcompany.png'
import face from './img/facebook.png'
import insta from './img/instagram.png'
import linkedin from './img/linkedin.png'

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className='footer--padding'>
              <h2 className="footer__title">Receba novidades da nossa área de produtos digitais.</h2>
              <div className="footer__form">
                  <input className="footer__input" type="text" placeholder="Digite seu e-mail" />
                  <button className="footer__btn">Cadastrar</button>
              </div>
            </div>
            <div className="footer__end">
              <img className="footer__img" src={logo} />
              <div className='footer__redeSocial'>
                <a href='javascript:void(0)'><img src={face} /></a>
                <a href='javascript:void(0)'><img src={insta} /></a>
                <a href='javascript:void(0)'><img src={linkedin} /></a>
              </div> 
            </div>
        </div>
    </div>
  );
}

export default Footer;
