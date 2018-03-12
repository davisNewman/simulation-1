import React, { Component } from 'react'
import axios from 'axios'
import NavBin from '../Nav/Nav-bin'
import './Items.css'

export default class Items extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            binName: null,
            binPrice: null,
            itemChange: false,
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/getItem?id=${this.props.match.params.item}`)
        .then(res=>{
            this.setState({
                binName: res.data.bin_name,
                binPrice: res.data.bin_price
            })
        })
    }


    handleEdit(){
        this.setState({
            itemChange: true
        })
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

    handleEdit2(){
        axios.put(`/api/shelfie/editItem?id=${this.props.match.params.item}`, {binName: this.state.binName, binPrice: this.state.binPrice} )
        this.setState({
            itemChange: false
        })
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <NavBin url = {this.props.location.pathname} param = {this.props.match.params.item}/>
                </div>
                <div className = 'container'>
                    <div className = 'content'>   
                        <div className = 'right'>
                            <div className = 'data'>
                            <span> Name </span>
                                {!this.state.itemChange ? <input value = {this.state.binName}></input> : <input onChange = {(e)=>this.handleNameInput(e.target.value)}></input>}
                                    <span> Price </span>
                                {!this.state.itemChange ? <input value = {this.state.binPrice}></input> : <input onChange = {(e)=>this.handlePriceInput(e.target.value)}></input>}
                            </div>
                            <div className = 'button-data'>
                                {!this.state.itemChange ? <button className = 'edit' onClick = {()=>this.handleEdit()}> Edit </button> : <button className = 'save' onClick = {()=>this.handleEdit2()}> Save</button>}
                                <button> Delete </button>
                            </div>
                        </div>               
                    </div> 
                </div>
            </div>
        )
    }
}