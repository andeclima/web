import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/signup-new.jpg'
import './style.css'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            nome: '',
            email: '',
            municipio: '',
            uf: '',
            senha: '',
            confirmaSenha: ''
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className='profile-page'>
                <PageHeader />
                <div className="profile-wrapper">
                    <div className="profile">
                        <form onSubmit={this.handleProfile}>
                            <h1>Perfil</h1>
                            <p>Esses são os seus dados que estão mantidos conosco</p>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Profile