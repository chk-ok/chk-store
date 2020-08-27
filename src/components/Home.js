import React from 'react'
import './Home.css';

export default function Home(props) {
    return (
        <div id="home" className="d-flex">
            <div id="welcomeMessage" className="jumbotron col-sm-6 mx-auto shadow align-self-center">
                <h2>
                    {props.greeting}
                </h2>
                <small className="text-secondary">Estamos trabajando para vos</small>
            </div>
        </div>
    )
}
