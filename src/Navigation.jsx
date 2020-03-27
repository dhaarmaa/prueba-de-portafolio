import React, { Component } from 'react';
// import '../components/navigation.css';
import './style.css';
import {  Link } from "react-router-dom";

class Navigation extends Component {
    render(){
        return(
            <nav className="navbar">
                {/* <div className="nav-link"> */}
                    <Link to="/home" className="Navigation-link"><i className="fas fa-home"></i>Inicio</Link>
                    <Link to="/project" className="Navigation-link"><i className="fas fa-laptop-code"></i>Proyectos</Link>
                    <Link to="/about" className="Navigation-link"><i className="fas fa-cat"></i>Conoceme</Link>
                    {/* <Link to="/contact" className="Navigation-link">{this.props.contact}</Link> */}
                    <Link to="/" className ="Navigation-link"></Link>
                {/* </div> */}
            </nav>
        )
    }
}

export default  Navigation;