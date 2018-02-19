import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Bins.css'

export default class Bins extends Component {
    constructor(props){
        super(props)

        this.state = {
            binName: '',
            binPrice: '',
            bins: []
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/bins?bins=${this.props.match.params.bins}`)
        .then(res=>{
            console.log(res)
            this.setState({
                bins: res.data
            })
        })
    }

    render(){
        return(
        <div>
            {this.state.bins ? <div className = 'bin-button'> Bin </div> : <div className = 'add-to-bin-button'> + Add Inventory to bin </div>}
        </div>
        )
    }
}