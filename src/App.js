import React, { Component } from 'react';
import './components/Shelves/Shelves.css';
import image from './imgs/logo.png'
import routes from './routes'
import { Link } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <div className='nav-contents'>
          {/* 54G & 54E*/ }
            <img className = 'image' src={image} alt ='logo'/> 
            {/* 54H */}
            <Link to='/'><span className='shelfie'>SHELFIE</span></Link>
          </div>
        </div>
        <div className='shelves'>
          {routes}
        </div>
      </div>
    );
  }
}

