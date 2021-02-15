import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Clientes from './pages/Clientes'
import Signup from './pages/Signup'
import Bikes from './pages/Bikes'
import Search from './pages/Search'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Landing from './pages/Landing'
import './assets/styles/global.css'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/bikes' component={Bikes} />
                <Route path='/clientes' component={Clientes} />
                <Route path='/register' component={Register} />
                <Route path='/search' component={Search} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes