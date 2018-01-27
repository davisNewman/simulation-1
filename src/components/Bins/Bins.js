import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Bins.css'

export default class Bins extends Component {
    constructor(props){
        super(props)

        this.state = {
            binInfo: []

        }
    }

    componentDidMount(){
        axios.get('/api/shelfie/')
    }

    render(){
        return(
        <div className='test'>
            
        
        </div>
        )
    }
}