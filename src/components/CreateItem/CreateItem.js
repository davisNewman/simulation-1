import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'

import './CreateItem.css'

export default class CreateItem extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            binName: '',
            binPrice: ''
        }
    }

    handleNameInput(val){
        this.setState({
            binName: val
        })
    }

    handlePriceInput(val){
        this.setState({
            binPrice: val
        })
    }
    
    handleAddNameInput(){
        axios.post('/api/shelfie/createItem', {id: this.props.match.params.bins, name: this.state.binName , price: this.state.binPrice})
        .then(res=>{
            window.location.replace(`http://localhost3000:/bins/${this.props.match.params.bins}`)
        })
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = {`/create/${this.props.match.params.bins}`}/>
                </div>
                <div className = 'container'>
                    <span className = 'container-title'> Name </span>
                    <input className = 'input-box' onChange = {(e)=>this.handleNameInput(e.target.value)}/>
                    <span className = 'container-title' value = '$'> Price </span>
                    <input className = 'input-box' onChange = {(e)=>this.handlePriceInput(e.target.value)}/>
                    <button className = 'add-inv-button'> + Add to Inventory </button>
                </div>
            </div>
        )
    }
}