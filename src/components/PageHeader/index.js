import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import logoImage from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.svg'

class PageHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="page-header">
                <div className="top-bar-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logoImage} alt="BikeLock" />
                        </Link>
                        <h1>BikeLock</h1>
                    </div>
                </div>
            </header>
        )
    }

}

export default PageHeader