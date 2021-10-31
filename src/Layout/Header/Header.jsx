import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className="l_header_wrapper">
            <img className="l_header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Heroes_tv_series.svg/1280px-Heroes_tv_series.svg.png" alt="logo" /> 
            <div className="l_header_menu">
                <div>
                <Link to="/" style={{ textDecoration: 'none' }}><p className="l_header_opcion">Home</p></Link>
                </div>
                <div>
                <Link to="/persona"  style={{ textDecoration: 'none' }}><p className="l_header_opcion">Personas</p></Link>
                </div>
                <div>
                <Link to="/heroe"  style={{ textDecoration: 'none' }}><p className="l_header_opcion">Heroes</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
