import React from 'react';
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css';
import InfiniteMenu from './infinitemenu';

// const menu = new InfiniteMenu(document.querySelector('nav.menu'));

const TITLE = 'Scroll Loop Menu | Zak Weiland'

function App() {
  return (
    <Router>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="App">
        <h1>OJO</h1>
        <nav class="menu">
          <div class="menu__item"><Link class="menu__item-inner">1. Farmhouse Style</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">2. Colonial House Style</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">3. Cape Cod House Style</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">4. Spanish Style House</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">5. Art Deco Style</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">6. Japanese Style House</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">7. Craftsman Style Home</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">8. Transitional Style</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">9. Prairie Style Homes</Link></div>
          <div class="menu__item"><Link class="menu__item-inner">10. Modern Style Homes</Link></div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
