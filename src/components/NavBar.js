import React from 'react';
import logo from '../images/logo-50x53.png';

class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand navbar-light bg-light">

            {/*Logo*/}

            <a className="navbar-brand" href="index.html" alt="Home">
                <img src={logo} alt="Chillko"/>
            </a>

            {/*Secciones*/}

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Ofertas</a>
                    </li>
                </ul>

                {/*Buscador*/}
                
                <form className="form-inline ml-auto" action="/action_page.php">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search"/>
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

                {/*Login*/}

                <a href="index.html" className="ml-3 mr-1">
                    <svg width="1em" height="1em" className="bi bi-person" fill="#99185a">
                        <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                </a>

        </nav>
        )
    }
}

export default Navbar;