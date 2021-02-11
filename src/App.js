import React from 'react'
import Maiuscula from './Maiuscula'
import Minuscula from './Minuscula'
import Teste from './Teste'

function App() {
    return (
        <div>
            <h1>Bem-vindo ao ReactJS novamente!</h1>
            <h2>Versao 2.0</h2>
            <p>
                <Maiuscula texto="teste de conversão de texto" />
                <Minuscula>ESTE TEXTO É PARA CONVERTER PARA MINÚSCULA</Minuscula>
                <Teste />
            </p>
        </div>
    )
}

export default App;