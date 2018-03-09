import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav-bin.css'
import image from '../../imgs/logo.png'

export default function NavBin (props){
    let param = props.param
    switch(props.url){
        
        case `/bin/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf A </span>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Bin 1</span>
                    </div>
                </div>
            )
        case `/bin/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf B </span>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Bin 1</span>
                    </div>
                </div>
            )
        case `/bin/${param}`:
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Shelf C </span>
                </div> 
            </div>
            )
        case `/bin/${param}`:
            return(
                <div className = 'nav-shelf'>
                <div className = 'logo-holder'>
                    <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                </div>
                <div className = 'shelf-title-box'>
                    <span className = 'shelf-title'> Shelf D </span>
                </div> 
                </div>
            )
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
    
        default: 
        return <h1>`Hey you've got an error this should not be displayed`</h1>
    }
    
}