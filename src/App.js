import React from 'react'
import {Link} from 'react-router-dom'

function App() {
    return (
        <div>
            <h1>Bem-vindo ao ReactJS novamente!</h1>
            <h2>Versao 2.0</h2>
            <h3>Menu Principal</h3>
            <ul>
                <li>
                    <Link to='/clientes'>Clientes</Link>
                </li>
                <li>
                    <Link to='/consultar'>Consultar</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/cadastro'>Cadastro</Link>
                </li>
                <li>
                    <Link to='/perfil'>Perfil</Link>
                </li>
                <li>
                    <Link to='/bicicletas'>Bicicletas</Link>
                </li>
                <li>
                    <Link to='/registrar'>Registrar</Link>
                </li>
            </ul>
        </div>
    )
}

export default App;