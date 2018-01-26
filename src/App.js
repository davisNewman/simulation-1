import React, { Component } from 'react';
import './App.css';
import './imgs/logo.png'
import routes from './routes'
import { Link } from 'react-router-dom'
import Shelves from './components/Shelves/Shelves'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <div className='nav-contents'>
            {/* <img src='../Imgs/logo.png'/> */}
            <Link to='/'><div className='shelfie'>SHELFIE</div></Link>
          </div>
        </div>
        <div className='shelves'>
          {routes}
        </div>
       
        
      </div>
    );
  }
}

