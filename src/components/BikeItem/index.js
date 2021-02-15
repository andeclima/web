import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import iconBike from '../../assets/images/icons/bike-item.png'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import './style.css'

class BikeItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            bike: this.props.bicicleta
        }
        this.removeBike = this.removeBike.bind(this)
    }

    async removeBike(e) {
        // const idBike = e.target.key //this.state.bike.id
        const {bike} = this.state
        const idCliente = getToken();
        try {
            const resp = await api.delete(`/clientes/${idCliente}/bicicletas/${bike.id}`)
            // this.props.history.push("/bikes");
        } catch(err) {
            console.log('Erro na exclusão da bicicleta' + err)
        }
    }

    render() {
        const bike = this.state.bike
        return (
            <article className="bike-item">
                <header>
                    <img
                        src= {iconBike}
                        alt="Bike"
                    />
                    <div>
                        <strong>{bike.nome}</strong>
                        <span>{bike.numeroSerie}</span>
                    </div>
                </header>
                <p>
                    Marca: {bike.marca}. Modelo: {bike.modelo}. Tipo de Bicicleta: {bike.tipo}. Tipo de Quadro: {bike.tipoQuadro}. Cor: {bike.cor}.
                    <br /> <br />
                    Informações Adicionais<br />
                    {bike.informacoesAdicionais}
                </p>
    
                <footer>
                    <p>
                        Tag
                        <strong>{bike.tag}</strong>
                    </p>
                    <Link className='botaoLink' to={`/register?id=${bike.id}`}>Editar</Link>
    
                    <button key={bike.id} onClick={this.removeBike}>Excluir</button>
                </footer>
            </article>
        )
    }
}

export default BikeItem