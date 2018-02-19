import React, { Component } from 'react'
import './CreateItem.css'

export default class CreateItem extends Component {

    render(){
        return(
            <div className = 'container'>
                <span className = 'container-title'> Name </span>
                <input className = 'input-box'/>
                <span className = 'container-title' value = '$'> Price </span>
                <input className = 'input-box'/>
                <button className = 'add-inv-button'> + Add to Inventory </button>
            </div>
        )
    }
}