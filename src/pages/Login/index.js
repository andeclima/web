import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/bground-login.jpg'
import './style.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: '',
            email: '',
            senha: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e) {
        e.preventDefault()
        console.log(this.state.email)
        console.log(this.state.senha)
    }

    render() {
        return (
            <div className='login-page'>
                <PageHeader />
                
                <div className="login-wrapper">
                    <div className="login">
                        <form onSubmit={this.handleLogin}>
                            <h1>Login</h1>
                            <p>Por favor, informe os seus dados para acessar a nossa plataforma</p>
                            <input
                                type="email"
                                placeholder="Endereço de e-mail"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <input
                                type="password"
                                placeholder="Senha"
                                onChange={e => this.setState({ senha: e.target.value })} />
                            <button type="submit">Entrar</button>
                            {this.state.error && <p>{this.state.error}</p>}
                            <hr />
                            <Link to="/signup">Criar conta</Link>
                        </form>
                    </div>
                    <div className="login-image" style={{
                                backgroundImage: `url(${background})`
                            }}>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Login