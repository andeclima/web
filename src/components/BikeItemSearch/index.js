import React from 'react'

import iconBike from '../../assets/images/icons/bike-item.png'
import './style.css'

function BikeItemSearch(props) {
    return (
        <article className="bike-item-search">
            <header>
                <img
                    src= {iconBike}
                    alt="Bike"
                />
                <div>
                    <strong>Nome</strong>
                    <span>Número de Série</span>
                </div>
            </header>
            <p>
                Marca. Modelo. Tipo de Bicicleta. Tipo de Quadro. Cor.
                <br />
                Informações Adicionais<br />
                Xpto
            </p>

            <footer>
                <p>
                    Proprietário
                    <strong>Fulano de Tal</strong>
                </p>
            </footer>
        </article>
    )
}

export default BikeItemSearch