import React, {Component} from 'react'
import PageHeader from '../../components/PageHeader'
import './style.css'

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
        this.handleBikes = this.handleBikes.bind(this)
    }

    handleBikes(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className='bikes-page'>
                <PageHeader />
                <div className="bikes-wrapper">
                    <div className="bikes">
                        <form onSubmit={this.handleBikes}>
                            <h1>Bicicletas</h1>
                            <p>Lista de bicicletas registradas</p>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Bikes