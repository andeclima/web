import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/signup-new.jpg'
import './style.css'

import api from '../../services/api'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            email: '',
            nome: '',
            cpf: '',
            municipio: '',
            uf: '',
            telefone: '',
            senha: '',
            confirmaSenha: ''
        }
        this.handleSignup = this.handleSignup.bind(this)
    }

    async handleSignup(e) {
        const {email, nome, cpf, municipio, uf, telefone, senha, confirmaSenha} = this.state
        e.preventDefault()
        try {
            if (senha !== confirmaSenha) {
                this.setState({
                    msg: 'Senhas não conferem! Favor repetir a digitação'
                })
            } else {
                const cliente = {email, nome, cpf, municipio, uf, telefone, senha}
                const response = await api.post('/clientes', cliente)
                const novo = response.data
                if (novo) {
                    // console.log(novo)
                    this.props.history.push("/bikes");
                } else {
                    this.setState({
                        msg: 'Erro na criação da conta! Favor tentar novamente'
                    })                    
                }
            }
        } catch(err) {
            this.setState({
                msg: 'Você já possui conta conosco! Tente efetuar o login'
            })                    
        }
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
                                type="email"
                                placeholder="Endereço de e-mail"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Nome completo"
                                onChange={e => this.setState({ nome: e.target.value })} />
                            <input
                                type="text"
                                placeholder="CPF"
                                onChange={e => this.setState({ cpf: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Município"
                                onChange={e => this.setState({ municipio: e.target.value })} />
                            <input
                                type="text"
                                placeholder="UF"
                                onChange={e => this.setState({ uf: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Telefone"
                                onChange={e => this.setState({ telefone: e.target.value })} />
                            <input
                                type="password"
                                placeholder="Senha"
                                onChange={e => this.setState({ senha: e.target.value })} />
                            <input
                                type="password"
                                placeholder="Repita sua senha"
                                onChange={e => this.setState({ confirmaSenha: e.target.value })} />
                            <button type="submit">Salvar</button>
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