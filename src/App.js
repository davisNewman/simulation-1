import React, { Component } from 'react';
import './App.css';
import './Imgs/logo.png'
import routes from './routes'

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
          {routes}
          {/* <Link to=''><div className='shelf'>Shelf A </div></Link>
          <Link to=''><div className='shelf'>Shelf B </div></Link>
          <Link to=''><div className='shelf'>Shelf C </div></Link>
          <Link to=''><div className='shelf'>Shelf D </div></Link> */}
        </div>
       
        
      </div>
    );
  }
}

