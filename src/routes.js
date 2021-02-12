import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Clientes from './pages/Clientes'
import Cadastro from './pages/Cadastro'
import Bicicletas from './pages/Bicicletas'
import Consultar from './pages/Consultar'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Registrar from './pages/Registrar'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/clientes' component={Clientes} />
                <Route path='/bicicletas' component={Bicicletas} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/consultar' component={Consultar} />
                <Route path='/login' component={Login} />
                <Route path='/perfil' component={Perfil} />
                <Route path='/registrar' component={Registrar} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes