import React, {Component} from 'react'
import api from '../../services/api'

class Clientes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lista: [],
            msg: '',
            id: -1
        }
        this.listarClientes = this.listarClientes.bind(this)
        this.criarCliente = this.criarCliente.bind(this)
        this.atualizarCliente = this.atualizarCliente.bind(this)
        this.removerCliente = this.removerCliente.bind(this)
        this.formRemoverCliente = this.formRemoverCliente.bind(this)
    }

    componentDidMount() {
        this.listarClientes();
    }

    async listarClientes() {
        const response = await api.get("/clientes")
        const dados = response.data
        this.setState({
            lista: dados
        })
    }

    async criarCliente() {
        const cliente = {
            nome: 'Anderson Lima',
            email: 'anderson.lima@grupocev.com',
            telefone: '(86) 1234-5678',
            cpf: '123.456.789-00',
            municipio: 'Teresina',
            uf: 'PI'
        }
        const response = await api.post("/clientes", cliente)
        const novoCliente = response.data
        if (novoCliente != null) {
            this.setState({
                msg: 'Cliente criado com sucesso (id: ' + novoCliente.id + ')'
            })
            this.listarClientes();
        }
    }

    async atualizarCliente() {
        const cliente = {
            id: 10,
            nome: 'Anderson Lima do iCEV',
            email: 'anderson.lima@hotmail.com',
            telefone: '(86) 1234-5678',
            cpf: '123.456.789-00',
            municipio: 'Recife',
            uf: 'PE'
        }
        const response = await api.put('/clientes/10', cliente)
        const clienteAtualizado = response.data
        if (clienteAtualizado != null) {
            this.setState({
                msg: 'Cliente atualizado com sucesso!'
            })
            this.listarClientes()
        }
    }

    async removerCliente() {
        const response = await api.delete('/clientes/12')
        this.setState({
            msg: 'Cliente removido com sucesso!'
        })
        this.listarClientes()
    }

    async formRemoverCliente(e) {
        e.preventDefault()
        const response = await api.delete('/clientes/' + this.state.id)
        this.setState({
            msg: 'Cliente removido com sucesso!'
        })
        this.listarClientes()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formRemoverCliente}>
                    <h1>Componente Clientes</h1>
                    <hr />
                    <ul>
                        {
                            this.state.lista.map(
                                function (item) {
                                    return (
                                        <li key={item.id}>{item.id} - {item.nome} ({item.email})</li>
                                    )
                                }
                            )
                        }
                    </ul>
                    <p>
                        Quantidade de clientes: {this.state.lista.length}
                    </p>
                    <button onClick={this.listarClientes}>Pesquisar</button>
                    <button onClick={this.criarCliente}>Adicionar</button>
                    <button onClick={this.atualizarCliente}>Atualizar</button>
                    <button onClick={this.removerCliente}>Remover</button>
                    <hr />

                    <input 
                        placeholder='ID para excluir'
                        onChange={e => this.setState({ id: e.target.value })} />
                    
                    <button type="submit">Excluir</button>
                    {this.state.msg && <p>{this.state.msg}</p>}
                </form>
            </div>
        )
    }
}

export default Clientes