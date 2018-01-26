import React, { Component } from 'react'
import routes from '../../routes.js'
import { Link } from 'react-router-dom'

export default class Shelves extends Component {

    render(){
        return(
            <div>
                <div className='shelf'>Shelf A </div>
                <div className='shelf'>Shelf B </div>
                <div className='shelf'>Shelf C </div>
                <div className='shelf'>Shelf D </div>
            </div>
        )
    }
}
