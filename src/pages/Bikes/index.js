import React, {Component} from 'react'
import BikeItem from '../../components/BikeItem'
import PageHeader from '../../components/PageHeader'
import {Link} from 'react-router-dom'
import './style.css'
import api from '../../services/api'
import { getToken } from '../../services/auth'

class Bikes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaBikes: []
        }
        this.pesquisarBikes = this.pesquisarBikes.bind(this)
    }

    componentDidMount() {
        this.pesquisarBikes()
    }

    async pesquisarBikes() {
        const id = getToken()
        const response = await api.get(`/clientes/${id}/bicicletas`)
        if (response.data) {
            this.setState({
                listaBikes: response.data
            })
        } else {
            alert('Nenhuma biciclceta encontrada para você')
        }
    }

    render() {
        return (
            <div className='bikes-page'>
                <PageHeader />
                <div className="bikes-wrapper">
                    <div className="bikes">
                        <h1>Bicicletas</h1>
                        <p>Lista de bicicletas registradas</p>
                        <Link to="/register">Registrar bicicleta</Link>
                        <div className="bikes-items">
                            {
                                this.state.listaBikes.map(
                                    function(bike) {
                                        return (
                                            <BikeItem key={bike.id} bicicleta={bike} />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Bikes