import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './componentes/header/header'
import BannerPrincipal from './componentes/bannerPrincipal/bannerPrincipal';
import Lojas from './componentes/lojas/lojas'
import Solucao from './componentes/solucao/solucao';
import QuemSomos from './componentes/quem-somos/quemSomos';
import Contato from './componentes/contato/contato';
import Footer from './componentes/footer/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BannerPrincipal />
    <Lojas />
    <Solucao />
    <QuemSomos />
    <Contato />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
