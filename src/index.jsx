import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Bio from './components/bio/Bio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Bio />
  </React.StrictMode>
);
