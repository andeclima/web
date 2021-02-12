import React, {Component} from 'react'
import axios from 'axios'

class Cadastro extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Formulário de Cadastro</h1>
                <hr />
                <form>
                    <input placeholder='Nome' /><br />
                    <input placeholder='E-mail' /><br />
                    <input placeholder='CPF' /><br />
                    <input placeholder='Município' /><br />
                    <input placeholder='UF' /><br />
                    <input placeholder='Telefone' /><br />
                </form>
            </div>
        )
    }
}

export default Cadastro