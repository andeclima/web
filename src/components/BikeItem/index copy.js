import React from 'react'
import {Link} from 'react-router-dom'
import iconBike from '../../assets/images/icons/bike-item.png'
import './style.css'


function BikeItem(props) {
    const bike = props.bicicleta
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

                <button onClick={removeBike}>Excluir</button>
            </footer>
        </article>
    )
}

export default BikeItem