import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bins from './components/Bins/Bins'
import CreateItem from './components/CreateItem/CreateItem'
import Shelves from './components/Shelves/Shelves';
import Items from './components/Items/Items'

export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/bins/:bins' component={Bins}/>
        <Route path='/create/:bin' component={CreateItem}/>
        <Route path='/bin/:item' component={Items}/>
    </Switch>
)