import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/50x53-white.png';
import CartIcon from './CartIcon.js';
import './NavBar.css';

export default function NavBar() {
    
    return (
        <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-light shadow sticky-top">

            {/*Logo*/}

            <Link to="/">
                <div className="navbar-brand">
                    <img src={logo} alt="Chillko"/>
                </div>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/*Secciones*/}

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/"><span className="nav-link">Categorias</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/"><span className="nav-link">Hot Sale</span></Link>
                    </li>
                </ul>

                {/*Buscador*/}
                
                <form className="form-inline ml-auto" action="/action_page.php">
                    <div className="input-group shadow">
                        <input id="searchInput" className="form-control" type="text" placeholder="Search"/>
                        <div className="input-group-append">
                            <button id="searchButton" className="input-group-text" type="submit">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>

                <CartIcon/>

                {/*Login*/}

                <div className="mr-1">
                    <svg width="1em" height="1em" className="bi bi-person" fill="white">
                        <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                </div>
            </div>
        </nav>
    )
}