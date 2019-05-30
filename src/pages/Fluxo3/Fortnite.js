import React, { Component } from 'react';
import { Imagem } from './imagens';
import './style.scss';
import Carousel from 'nuka-carousel';
import { textos } from './textos';

export default class Page extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className='main-container'>
        <section id='timeline' className='timeline-outer'>
          <div className='container' id='content'>
            <div className='row'>
              <div className='col s12 m12 l12'>
                <h1 className='blue-text lighten-1 header'>
                  {/* Fortnite Jump Poll */}
                  <img src={Imagem.descoberta} alt={'texto'} />
                </h1>
                <h1 className='blue-text lighten-1 header'>
                  {/* Fortnite Jump Poll */}
                  Application flow
                </h1>

                <ul className='timeline'>
                  {textos.map(secao => {
                    return (
                      <li
                        className='event'
                        data-date={secao.timeline}
                        key={(Math.random() * 1000) / 4}>
                        <h3>{secao.titulo}</h3>
                        <br />
                        <p>{secao.texto}</p> <hr />
                        <Carousel>
                          {secao.imagens.map(imagem => (
                            <img src={imagem} alt={secao.alt} />
                          ))}
                        </Carousel>
                        {/* <p>{secao.texto}</p> */}
                        <hr />
                        <ul>
                          {secao.listas.map(item => (
                            <li className='event' key={(Math.random() * 1000) / 4}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* teste */}
        {/* <Carousel>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Carousel> */}
        {/* fim teste */}
        <br />
      </div>
    );
  }
}
