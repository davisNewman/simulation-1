import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App';
import Bins from './components/Bins/Bins'
import CreateInv from './components/CreateInv/CreateInv'
import Shelves from './components/Shelves/Shelves';
import Bin from './components/Bin/Bin'

export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/bins/:bins' component={Bins}/>
        <Route path='/create/:bin' component={CreateInv}/>
        <Route path='/bin/:bin' component={Bin}/>
    </Switch>
)