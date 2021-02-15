import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/signup-new.jpg'
import './style.css'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            nome: '',
            email: '',
            municipio: '',
            uf: '',
            senha: '',
            confirmaSenha: ''
        }
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleSignup(e) {
        e.preventDefault()
        console.log(this.state.nome)
        console.log(this.state.email)
        console.log(this.state.municipio)
        console.log(this.state.uf)
        console.log(this.state.senha)
        console.log(this.state.confirmaSenha)
    }

    render() {
        return (
            <div className='signup-page'>
                <PageHeader />
                
                <div className="signup-wrapper">
                    <div className="signup">
                        <form onSubmit={this.handleSignup}>
                            <h1>Criar Conta</h1>
                            <p>Informe os seus dados para criar um nova conta em nossa plataforma</p>
                            <input
                                type="text"
                                placeholder="Nome completo"
                                onChange={e => this.setState({ nome: e.target.value })} />
                            <input
                                type="email"
                                placeholder="Endereço de e-mail"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Município"
                                onChange={e => this.setState({ municipio: e.target.value })} />
                            <input
                                type="text"
                                placeholder="UF"
                                onChange={e => this.setState({ uf: e.target.value })} />
                            <input
                                type="password"
                                placeholder="Senha"
                                onChange={e => this.setState({ senha: e.target.value })} />
                            <input
                                type="password"
                                placeholder="Repita sua senha"
                                onChange={e => this.setState({ confirmaSenha: e.target.value })} />
                            <button type="submit">Entrar</button>
                            {this.state.msg && <p>{this.state.msg}</p>}
                            <hr />
                            <Link to="/login">Já possuo uma conta</Link>
                        </form>
                    </div>
                    <div className="signup-image" style={{
                                backgroundImage: `url(${background})`
                            }}>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Signup