import React from 'react'
import produtos from './img/produtos.png'
import './bannerPrincipal.css'

function BannerPrincipal() {
    return (
        <div className="bannerPrincipal">
          <div className="container">
              <div className="bannerPrincipal--esquerda">
                  <h1 className='bannerPrincipal__title'>Criamos lojas que vendem mais.</h1>
                  <p className="bannerPrincipal__text">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                  <a className="bannerPrincipal__btn" href="javascript:void(0)">Veja nossas soluções</a>
              </div>
              <div className="bannerPrincipal--direita">
                  <a href='javascript:void(0)'>
                      <img src={produtos} />
                  </a>
              </div>
          </div>
        </div>
    );
  }
  
  export default BannerPrincipal;