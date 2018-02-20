import React from 'react'
import {link, Link} from 'react-router-dom'
import '../Nav/Nav.css'
import image from '../../imgs/logo.png'

export default function Nav (props){

    switch(props.url){
        case '/bins/A':
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf A </span>
                    </div> 
                </div>
            )
            break;
        case '/bins/B':
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf B </span>
                    </div> 
                </div>
            )
            break;
        case '/bins/C':
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Shelf C </span>
                </div> 
            </div>
            )
            break;
        case '/bins/D':
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Shelf D </span>
                </div> 
                </div>
            )
            break;
        case '/':
            return(
                    <div className = 'nav'>
                    <div className = 'nav-contents'>
                      {/* 54G & 54E*/ }
                        <img className = 'image' src = {image} alt = 'logo'/>
                        {/* 54H */}
                        <Link to = '/'><span className = 'shelfie'> SHELFIE </span></Link>
                    </div>
                    </div>
            )
            break;
        case '/create/A1':
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Add to Bin 1 </span>
                </div> 
                </div>
            )
        case '/create/A2':
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <a href = 'http://localhost:3000'><img className = 'shelf-image' src = {image} alt = 'logo'/></a>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Shelf D </span>
                </div> 
                </div>
            )
            break;
        default: 
        return <h1>`Hey you've got an error this should not be displayed`</h1>
    }
    
}


// <div className='nav'>
// <div className='nav-contents'>

//   <img className = 'image' src={image} alt ='logo'/> 

//   <Link to='/'><span className='shelfie'>SHELFIE</span></Link>
  
// </div>
// </div>
// <div className='shelves'>
// </div>