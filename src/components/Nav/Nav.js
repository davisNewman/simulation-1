import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function NavBar(props){
    console.log(props.nav,props.binNum)
    switch(props.nav){
        case 'A': 
        return (
            <div className = 'shelfNav'>
                <Link to = '/'><button> Shelfie </button></Link>
                <h1 className = 'shelf'> Shelf A </h1>
            </div>
        )  
        break;
    }
}