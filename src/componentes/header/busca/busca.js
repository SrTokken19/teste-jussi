import React from 'react'
import lupa from '../img/search.svg'
import './busca.css'

function Busca () {
    return (
        <div className='busca'>
            <input type='text' className='busca__input' placeholder='Buscar' />
            <button className='busca__btn' ><img src={lupa} /></button>
        </div>
    )
}

export default Busca;