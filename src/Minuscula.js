import React from 'react'

function Minuscula(props) {
    const texto = props.children;
    const textoModificado = texto.toLowerCase()
    return(
        <div>
            {textoModificado}
        </div>
    )
}

export default Minuscula;