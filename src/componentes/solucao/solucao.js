import React, { useState, useEffect } from 'react'
import './solucao.css'
import Busca from '../busca/busca'
import lupa from '../header/img/search.svg'

const api = 'https://kitsu.io/api/edge/';

function Solucao() {

    const [text, setText] = useState('')
    const [info, setInfo] = useState({})

    useEffect(() => {
        if (text) {
            
            setInfo({});

            fetch(`${api}anime?filter[text]=${text}&page[limit]=4`)
            .then((response) => response.json())
            .then((response) => {
                setInfo(response);
                console.log(info)
            });
        }
      }, [text]);

    return (
      <div className="solucao">
          <div className="container">
            <div className='solucao__header'>
              <h2 className="solucao__title">Nossas soluções</h2>
              <div className='busca'>
                  <Busca value={text} onChange={(str) => setText(str)} />
                  <button className='busca__btn' ><img src={lupa} /></button>
              </div>
            </div>
            <div className='solucao__resultado'>

              {info.data && (
                <ul className="solucao__lista">
                  {info.data.map((anime) => (
                    <li className='solucao__item' key={anime.id}>
                      <img
                        src={anime.attributes.posterImage.small}
                        alt={anime.attributes.canonicalTitle}
                      />
                      <p className='solucao__nome'>{anime.attributes.canonicalTitle}</p>
                      <p className='solucao__descricao'>{anime.attributes.description}</p>
                      <p className='solucao__dataEnd'>{anime.attributes.endDate}</p>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
      </div>
    );
  }
  
  export default Solucao;