import React from "react";
import { Component } from "react";

import '../resources/css/bootstrap.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
                <div className="container-fluid ">

                    <a className="navbar-brand" href="#">
                        <img src="https://static.educacionit.com/educacionit/assets/imagotype-it-fill-v2-color.svg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-md-end" id="navbarColor01">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item order-4">
                                <a className="nav-link active" href="/" role="tab">Salir
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item order-2">
                                <a className="nav-link" href="/publications" role="tab">Publicaciones</a>
                            </li>

                            <li className="nav-item order-2">
                                <a className="nav-link" href="/publications/new-publication" role="tab">Nueva Publicación</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel">

                        </div>
                        <div className="tab-pane" id="profile" role="tabpanel">...</div>
                        <div className="tab-pane" id="messages" role="tabpanel">...</div>
                        <div className="tab-pane" id="settings" role="tabpanel">...</div>
                    </div>
                </div>
            </nav>

        )
    }
}