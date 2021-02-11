import React, {Component} from 'react'

class Teste extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: 'Fulano',
            contador: 0
        }
        this.onAumentar = this.onAumentar.bind(this)
        this.onDiminuir = this.onDiminuir.bind(this)
    }

    render() {
        return (
            <div>
                <h1>Componente Teste</h1>
                <h2>Nome: {this.state.nome}</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <button onClick={this.onAumentar}>Aumentar</button>
                <button onClick={this.onDiminuir}>Diminuir</button>
            </div>
        )
    }

    onAumentar() {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    onDiminuir() {
        this.setState({
            contador: this.state.contador - 1
        })
    }
}

export default Teste