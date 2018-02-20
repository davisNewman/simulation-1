import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'


export default class Shelves extends Component {

    render(){
        return(
            <div>
                <Nav url = '/'/>
                <Link to='/bins/A'><div>Shelf A </div></Link>
                <Link to='/bins/B'><div>Shelf B </div></Link>
                <Link to='/bins/C'><div>Shelf C </div></Link>
                <Link to='/bins/D'><div>Shelf D </div></Link>
            </div>
        )
    }
}
