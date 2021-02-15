import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import './style.css'

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
        }
        this.handleLanding = this.handleLanding.bind(this)
    }

    handleLanding(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className='landing-page'>
                <PageHeader />
                <div className="landing-wrapper">
                    <div className="landing">
                        <h1>Bem-vindo ao ReactJS novamente!</h1>
                        <h2>Versao 2.0</h2>
                        <h1>Landing</h1>
                        <p>Página de início</p>
                        <h3>Menu Principal</h3>
                        <ul>
                            <li>
                                <Link to='/'>Landing</Link>
                            </li>
                            <li>
                                <Link to='/search'>Consultar</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Cadastro</Link>
                            </li>
                            <li>
                                <Link to='/profile'>Perfil</Link>
                            </li>
                            <li>
                                <Link to='/bikes'>Bicicletas</Link>
                            </li>
                            <li>
                                <Link to='/register'>Registrar</Link>
                            </li>
                            <li>
                                <Link to='/clientes'>Clientes</Link>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Landing