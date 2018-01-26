import React, { Component } from 'react';
import './App.css';
import './Imgs/logo.png'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <div className='nav-contents'>
            {/* <img src='../Imgs/logo.png'/> */}
            <span className='shelfie'>SHELFIE</span>
          </div>
        </div>
        <div className='shelves'>
          <div className='shelf'>Shelf A </div>
          <div className='shelf'>Shelf B </div>
          <div className='shelf'>Shelf C </div>
          <div className='shelf'>Shelf D </div>
        </div>
       
        
      </div>
    );
  }
}

