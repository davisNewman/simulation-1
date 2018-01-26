import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './src/App';
import Bins from './components/Bins/Bins'
import Create from './components/CreateInv/CreateInv'

export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/bins' component={Bins}/>
        <Route path='/create' component={CreateInv}/>
    </Switch>
)