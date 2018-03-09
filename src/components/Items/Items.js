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
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/getItem?id=${this.props.match.params.item}`)
        .then(res=>{
            this.setState({
                binName: res.data.bin_name
            })
        })
    }
    
    
    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <NavBin url = {this.props.location.pathname} param = {this.props.match.params.item}/>
                </div>
                <div className = 'container'>
                    <div className = 'whitespace'></div>
                    <div className = 'content'>
                        <div className = 'pic-container'>
                        </div>          
                        <div className = 'right'>
                            <span className = 'name'> Name </span>
                            <input></input>
                            <span className = 'price'> Price </span>
                            <input></input>
                            <button> Edit </button>
                            
                        </div>               
                    </div> 
                </div>
            </div>
        )
    }
}