import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav-create.css'
import image from '../../imgs/logo.png'

export default function NavCreate (props){
    let param = props.param
    let param2 = props.param[0]
    let param3 = props.param[1]
    switch(props.url){
        case `/create/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <Link to = {`/bins/${param2}`}><span className = 'shelf-title'> Shelf {param2} </span></Link>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Add to Bin {param3} </span>
                    </div>
                </div>
        )
        case `/create/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <Link to = {`/bins/${param2}`}><span className = 'shelf-title'> Shelf {param2} </span></Link>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Add to Bin {param3} </span>
                    </div>
                </div>
            )
        case `/create/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <Link to = {`/bins/${param2}`}><span className = 'shelf-title'> Shelf {param2} </span></Link>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Add to Bin {param3} </span>
                    </div>
                </div>
            )
        case `/create/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to ='/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <Link to = {`/bins/${param2}`}><span className = 'shelf-title'> Shelf {param2} </span></Link>
                    </div> 
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Add to Bin {param3} </span>
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