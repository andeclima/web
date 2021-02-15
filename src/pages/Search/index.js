import React, {Component} from 'react'
import BikeItem from '../../components/BikeItem'
import PageHeader from '../../components/PageHeader'
import {Link} from 'react-router-dom'
import './style.css'
import BikeItemSearch from '../../components/BikeItemSearch'

class Bikes extends Component {

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
    }

    render() {
        return (
            <div className='bikes-page'>
                <PageHeader />
                <div className="bikes-wrapper">
                    <div className="bikes">
                        <h1>Pesquisar Bicicleta</h1>
                        <p>Aqui você pode encontar uma bicicleta que já tenha sido previamente registrado conosco</p>
                        <form onSubmit={this.handleSearch}>
                            <input
                                type="text"
                                placeholder="Tag"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <button type="submit">Pesquisar</button>
                            {this.state.error && <p>{this.state.error}</p>}
                        </form>
                        <div className="bikes-items">
                            <BikeItemSearch />
                            <BikeItemSearch />
                            <BikeItemSearch />
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Bikes