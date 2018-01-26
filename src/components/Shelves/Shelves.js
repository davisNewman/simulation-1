import React, { Component } from 'react'
import routes from '../../routes.js'
import { Link } from 'react-router-dom'

export default class Shelves extends Component {

    render(){
        return(
            <div>
                <Link to='/bins/A'><div className='shelf'>Shelf A </div></Link>
                <Link to='/bins/B'><div className='shelf'>Shelf B </div></Link>
                <Link to='/bins/C'><div className='shelf'>Shelf C </div></Link>
                <Link to='/bins/D'><div className='shelf'>Shelf D </div></Link>
            </div>
        )
    }
}
