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

    render(){
        return(
            <div className='bin-list'>
                <div className='individual-bin'>
                    <span className='add-to-bin'>+ Add inventory to bin</span> 
                </div>
                <div className='individual-bin'>
                    <span className='add-to-bin'>+ Add inventory to bin</span> 
                </div>
                <div className='individual-bin'>
                    <span className='add-to-bin'>+ Add inventory to bin</span> 
                </div>
                <div className='individual-bin'>
                    <span className='add-to-bin'>+ Add inventory to bin</span> 
                </div>
                <div className='individual-bin'>
                    <span className='add-to-bin'>+ Add inventory to bin</span> 
                </div>
            </div>
        )
    }
}