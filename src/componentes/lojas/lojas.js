import React from 'react';
import seta from './img/ico-seta.png'
import brastemp from './img/logo-brastemp.png'
import compraCerta from './img/logo-compra.png'
import consul from './img/consul-logo.png'
import theBar from './img/logo-thebar.png'
import './lojas.css'

function Lojas() {
  return (
      <div className="lojas">
        <div className="container lojas--flex">
            <p className='lojas__title'>Nossas principais lojas VTEX</p>
            <img className="lojas__seta" src={seta} />
            <a className='lojas__link' href='javascript:void(0)'><img src={brastemp} /></a>
            <a className='lojas__link' href='javascript:void(0)'><img src={compraCerta} /></a>
            <a className='lojas__link' href='javascript:void(0)'><img src={consul} /></a>
            <a className='lojas__link' href='javascript:void(0)'><img src={theBar} /></a>
        </div>
      </div>
  );
}

export default Lojas;