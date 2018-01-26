import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App';
import Bins from './components/Bins/Bins'
import CreateInv from './components/CreateInv/CreateInv'
import Shelves from './components/Shelves/Shelves';

export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/bins' component={Bins}/>
        <Route path='/create' component={CreateInv}/>
    </Switch>
)