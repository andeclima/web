import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/signup-new.jpg'
import './style.css'

class Register extends Component {

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
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(e) {
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
            <div className='register-page'>
                <PageHeader />
                <div className="register-wrapper">
                    <div className="register">
                        <form onSubmit={this.handleRegister}>
                            <h1>Registro</h1>
                            <p>Informe os dados de sua nova bicicleta</p>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Register