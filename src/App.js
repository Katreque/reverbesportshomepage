import React from 'react';
import ItemMenu from './components/ItemMenu.js';

import FundoHeader from './_headerReverb.png';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <img src={FundoHeader} className="img-fluid" alt="HeaderBG" />
      </div>
      <div className="d-flex flex-row justify-content-center main-menu-color">
        <ItemMenu nome="Organização"/>
        <ItemMenu nome="Objetivo"/>
        <ItemMenu nome="Lineup"/>
      </div>
    </div>
  );
}

export default App;
