import React, {Component} from 'react'
import api from './services/api'

class ListaClientes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        this.busca()
    }

    busca = async function() {
        const resp = await api.get('/clientes')
        const listaClientes = resp.data
        this.setState({
            lista: listaClientes
        })
    }

    render() {
        return (
            <div>
                <h1>Lista de Clientes</h1>
                <hr />
                <ul>
                    {
                        this.state.lista.map(
                            function (item) {
                                return (
                                    <li key={item.id}>{item.nome}</li>
                                )
                            }
                        )
                    }
                </ul>
                <p>Quantidade: {this.state.lista.length}</p>
            </div>
        )
    }
}

export default ListaClientes