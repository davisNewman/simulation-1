import React, { Component } from 'react';
import './App.css';
import image from './imgs/logo.png'
import routes from './routes'
import { Link } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <div className='nav-contents'>
            <img className = 'image' src={image} alt ='logo'/>
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

