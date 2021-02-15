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
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
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
            <div className='search-page'>
                <PageHeader />
                <div className="search-wrapper">
                    <div className="search">
                        <form onSubmit={this.handleSearch}>
                            <h1>Pesquisa</h1>
                            <p>Aqui você pode verificar se a bicicleta que você procura está registrada conosco</p>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Signup