import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import './style.css'

import queryString from 'query-string'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            nome: '',
            numeroSerie: '',
            marca: '',
            modelo: '',
            cor: '',
            informacoes: '',
            idBicicleta: null
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.pesquisaBike = this.pesquisaBike.bind(this)
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search)
        if (params.id) {
            this.setState({
                idBicicleta: params.id
            })
            this.pesquisaBike(params.id)
        }
    }

    async pesquisaBike(idBike) {
        const idCliente = getToken();
        const resp = await api.get(`/clientes/${idCliente}/bicicletas/${idBike}`)
        const bike = resp.data
        if (bike) {
            this.setState({
                nome: bike.nome,
                numeroSerie: bike.numeroSerie,
                marca: bike.marca,
                modelo: bike.modelo,
                cor: bike.cor,
                informacoes: bike.informacoesAdicionais
            })
            console.log(this.state)
        }
    }

    async handleRegister(e) {
        e.preventDefault()

        const idCliente = getToken();
        const {nome, numeroSerie, marca, modelo, cor, informacoes} = this.state;
        const novaBicicleta = {nome, numeroSerie, marca, modelo, cor, informacoes}
        const response = await api.post(`/clientes/${idCliente}/bicicletas`, novaBicicleta)
        const novoRegistro = response.data
        if (novoRegistro) {
            this.props.history.push("/bikes");
        } else {
            this.setState({
                msg: 'Erro no registro da bicicleta'
            })
        }
    }

    render() {
        return (
            <div className='register-page'>
                <PageHeader />
                <div className="register-wrapper">
                    <div className="register">
                        <h1>Registro</h1>
                        <p>Informe os dados da bicicleta que você deseja registrar</p>
                        <form onSubmit={this.handleRegister}>
                            <input
                                type="text"
                                placeholder="Nome"
                                onChange={e => this.setState({ nome: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Número de Série"
                                onChange={e => this.setState({ numeroSerie: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Marca"
                                onChange={e => this.setState({ marca: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Modelo"
                                onChange={e => this.setState({ modelo: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Cor"
                                onChange={e => this.setState({ cor: e.target.value })} />
                            <input
                                type="text"
                                placeholder="Informações Adicionais"
                                onChange={e => this.setState({ informacoes: e.target.value })} />
                            <button type="submit">Salvar</button>
                            {this.state.msg && <p>{this.state.msg}</p>}
                            <hr />
                            <Link to="/bikes">Voltar</Link>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Register