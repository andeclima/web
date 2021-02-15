import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import background from '../../assets/images/bike-landing-3.jpg'
import './style.css'

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: '',
        }
        this.handleLanding = this.handleLanding.bind(this)
    }

    handleLanding(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className='landing-page'>
                <PageHeader />
                <div className="landing-wrapper">
                    <div className="landing">
                        <h1>Bem-vindo</h1>
                        <p>Estamos aqui para ajudar você a cuidar de uma importante parte de sua vida: sua bike!</p>
                        <div className="botoes">
                            <Link className="linkLogin" to="/login">Login</Link>
                            <Link className="linkSearch" to="/search">Pesquisar bike</Link>
                        </div>
                    </div>
                    <div className="landing-image" style={{
                                backgroundImage: `url(${background})`
                            }}>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Landing