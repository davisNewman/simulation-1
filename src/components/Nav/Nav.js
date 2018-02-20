import React from 'react'
import {link, Link} from 'react-router-dom'
import '../Nav/Nav.css'
import image from '../../imgs/logo.png'

export default function Nav (props){
    console.log(props.url)
    switch(props.url){
        case 'A':
            return(
                <div>
                    <Link to='/'><button> SHELFIE </button></Link>
                    <h1>SHELF A</h1>
                </div>
            )
            break;
        case 'B':
            return(
                 <div >
                    <Link to='/'><button> SHELFIE </button></Link>
                    <h1>SHELF B</h1>
                </div>
            )
            break;
        case 'C':
            return(
                 <div>
                    <Link to='/'><button> SHELFIE </button></Link>
                    <h1>SHELF C</h1>
                </div>
            )
            break;
        case 'D':
            return(
                 <div>
                    <Link to='/'><button > SHELFIE </button></Link>
                    <h1>shelf D</h1>
                </div>
            )
            break;
        case '/':
            return(
                <div className = 'app'>
                 <div className = 'nav'>
                    <div className = 'nav-contents'>
                      {/* 54G & 54E*/ }
                        <img className = 'image' src = {image} alt = 'logo'/>
                        {/* 54H */}
                        <Link to = '/'><span className = 'shelfie'> SHELFIE </span></Link>
                    </div>
                </div>
                </div>
            )
            break;
        case 'bin':
            return(
                 <div className = 'nav'>

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