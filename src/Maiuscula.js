import React from 'react'

function Maiuscula(props) {
    const texto = props.texto;
    const textoModificado = texto.toUpperCase()
    return(
        <div>
            {textoModificado}
        </div>
    )
}

export default Maiuscula;