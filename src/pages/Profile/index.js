import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import './style.css'

class Profile extends Component {

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
        this.handleProfile = this.handleProfile.bind(this)
    }

    handleProfile(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className='profile-page'>
                <PageHeader />
                <div className="profile-wrapper">
                    <div className="profile">
                        <h1>Perfil</h1>
                        <p>Aqui você pode atualizar os seus dados em nossa plataforma</p>
                        <form onSubmit={this.handleProfile}>
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
                            <button type="submit">Salvar</button>
                            {this.state.msg && <p>{this.state.msg}</p>}
                            <hr />
                            <Link to="/">Voltar</Link>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Profile