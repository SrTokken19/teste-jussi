import React, { useState, useEffect } from 'react'
import logo from './img/logoJussi.svg'
import carrinho from './img/shopping-cart.svg'
import lupa from './img/search.svg'
import './header.css'
import Busca from '../busca/busca'

function Header() {

    const [text, setText] = useState('')
    const [isActive, setActive] = useState(false)

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="header">
            <div className='header--esquerda'>
                <img src={logo} />
                <a className="header__link" href="javascript:void(0)">Nossas soluções</a>
                <a className="header__link" href="javascript:void(0)">Conheça a Jüssi</a>
            </div>
            <div className='header--direita'>
                <Busca value={text} onChange={(str) => setText(str)} />
                <a className="header__link" href="javascript:void(0)">Login</a>
                <a className="header__cart" href="javascript:void(0)">
                    <img src={carrinho} />
                </a>
            </div>
            <div className="header--mobile">
                <div className={isActive ? 'active': null}>
                    <button className='header__menu--ico' onClick={toggleClass}><span>menu</span></button>
                    <div className="header__drop">
                        <a className="header__link" href="javascript:void(0)">Nossas soluções</a>
                        <a className="header__link" href="javascript:void(0)">Conheça a Jüssi</a>
                        <a className="header__link" href="javascript:void(0)">Login</a>
                    </div>
                </div>
                <img src={logo} />
                <div>
                    <button className='header__menu--ico' ><img src={lupa} /></button>
                </div>
            </div>
        </div>
    )
}

export default Header;