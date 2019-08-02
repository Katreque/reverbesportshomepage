import React from 'react';
import ItemMenu from './components/ItemMenu.js';

import FundoHeader from './_headerReverb.png';
import FormacaoTime from './_formacaoTime.png';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <img src={FundoHeader} className="img-fluid" alt="HeaderBG" />
      </div>

      <div className="d-none d-sm-block">
        <ul className="nav justify-content-center main-menu-color">
          <li className="nav-item">
            <ItemMenu nome="Organização"/>
          </li>
          <li className="nav-item">
            <ItemMenu nome="Objetivo"/>
          </li>
          <li className="nav-item">
            <ItemMenu nome="Lineup"/>
          </li>
          <li className="nav-item">
            <ItemMenu nome="Loja Virtual"/>
          </li>
        </ul>
      </div>
      <div className="d-block d-sm-none">
        <nav className="navbar navbar-expand-lg main-menu-color navbar-dark">
          <a className="navbar-brand" href="/">Menu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">Organização</a>
              <a className="nav-item nav-link" href="/">Objetivo</a>
              <a className="nav-item nav-link" href="/">Lineup</a>
              <a className="nav-item nav-link" href="/">Loja Virtual</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="linha-divisao-container"></div>

      <div className="d-none d-sm-block second-part-color">
        <div className="sub-titulo">
          <div className="anim-container primeiro">É hora de </div>
          <div className="anim-container segundo">
            <span className="anim-container texto-animado">Ressoar!</span>
          </div>
        </div>
      </div>

      <div className="d-block d-sm-none second-part-color">
        <div className="sub-titulo-mobile">
          <div className="anim-container">
            <span className="anim-container texto-animado">É hora de Ressoar!</span>
          </div>
        </div>
      </div>

      <div className="second-part-color">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card text-center mb-2">
                <img src={FormacaoTime} className="img-fluid" alt="HeaderBG" />
                <div className="card-body">
                  <h5 className="card-title">Nosso Time (Kappa)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
