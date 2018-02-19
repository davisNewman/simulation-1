import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Bins.css'

export default class Bins extends Component {
    constructor(props){
        super(props)

        this.state = {
            bins: null
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/bins?bins=${this.props.match.params.bins}`)
        .then(res=>{
            this.setState({
                bins: res.data
            })
        })
    }

    render(){
        return(
        <div>
            {this.state.bins ? 
                <Link to = {`/bin/${this.props.match.params}`}><div className = 'individual-bin'> Bin 1 </div></Link> : 
                <Link to = {`/create/${this.props.match.params.bins}1`}><div className = 'add-to-bin-button'> + Add Inventory to bin </div></Link>}
            {this.state.bins ? 
                <Link to = {`/bin/${this.props.match.params}`}><div className = 'individual-bin'> Bin 2 </div></Link> : 
                <Link to = {`/create/${this.props.match.params.bins}2`}><div className = 'add-to-bin-button'> + Add Inventory to bin </div></Link>}
            {this.state.bins ? 
                <Link to = {`/bin/${this.props.match.params}`}><div className = 'individual-bin'> Bin 3 </div></Link> : 
                <Link to = {`/create/${this.props.match.params.bins}3`}><div className = 'add-to-bin-button'> + Add Inventory to bin </div></Link>}
            {this.state.bins ? 
                <Link to = {`/bin/${this.props.match.params}`}><div className = 'individual-bin'> Bin 4 </div></Link> : 
                <Link to = {`/create/${this.props.match.params.bins}4`}><div className = 'add-to-bin-button'> + Add Inventory to bin </div></Link>}
            {this.state.bins ? 
                <Link to = {`/bin/${this.props.match.params}`}><div className = 'individual-bin'> Bin 5 </div></Link> : 
                <Link to = {`/create/${this.props.match.params.bins}5`}><div className = 'add-to-bin-button'> + Add Inventory to bin </div></Link>}
        </div>
        )
    }
}