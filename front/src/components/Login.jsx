import React from "react";
import { Component } from "react";
import '../resources/css/bootstrap.css';
import '../resources/css/login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            key: "",
            active: false
        }
    }
    setValues = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    cleanValues = () => {
        this.setState(
            {
                email: "",
                key: "",
                active: false
            }
        );
    }

    register = (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/users/insert";
        const user = {
            email: this.state.email,
            key: this.state.key,
            active: true
        }
        const header = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "key": localStorage.credential,
                "value": localStorage.uuid,
                "Content-Type": "application/json"
            }
        }
        
        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => {
                console.log(json);
                localStorage.uuid = json.uuid;
                localStorage.credential = json.credential;
                window.location.href = "/";
            })
            .catch(error => {
                console.error(error);
                localStorage.clear();
                alert("Credenciales Incorrectas");
            });
        this.cleanValues();
    }

    signIn = (event) => {
        event.preventDefault();
        const url = "http://localhost:8080/login/signIn";
        const user = {
            email: this.state.email,
            key: this.state.key
        }
        const header = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => {
                console.log(json);
                localStorage.uuid = json.uuid;
                localStorage.credential = json.credential;
                window.location.href = `/publications ${localStorage.uuid}`;
            })
            .catch(error => {
                console.error(error);
                localStorage.clear();
                alert("Credenciales Incorrectas");
            });
        this.cleanValues();
    }

    render() {
        return (

            <>
                <div className="container bg-primary mt-5 shadow rounded " >
                    <div className="row align-items-stretch">
                        <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start"></div>
                        <div className="col bg-white rounded-end">
                            <div className="text-end">
                                <img src="https://static.educacionit.com/educacionit/assets/identidad/favicon/favicon.ico" alt="Logo" />
                                <h1 className="fw-bold text-center py-4">Bienvenido</h1>
                            </div>
                            <form onSubmit={this.signIn}>
                                <fieldset>
                                    <div className="form-group mb-2">
                                        <label for="exampleInputEmail1" className="form-label mt-4">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Ingrese su correo electrónico"
                                            value={this.state.email}
                                            onChange={this.setValues}
                                        />
                                        <small id="emailHelp" className="form-text text-muted">No compartiremos su correo electrónico con nadie más.</small>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label for="key" className="form-label mt-4">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="key"
                                            name="key"
                                            placeholder="Contraseña"
                                            required={true}
                                            value={this.state.key}
                                            onChange={this.setValues}
                                        />

                                    </div>

                                    <div className="d-grid gap-2">
                                        <button className="btn btn-outline-primary p-2" type="submit">Ingresar</button>
                                    </div>

                                    <div className="form-group">
                                        <a class="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#signIn">
                                            ¿Aún no tienes cuenta? Regístrate
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="signIn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title fw-bold w-100 text-center" id="signIn">Registrarse</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <form onSubmit={this.register}>
                                    <fieldset>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                aria-describedby="emailHelp"
                                                placeholder="Ingrese su correo electrónico"
                                                value={this.state.email}
                                                onChange={this.setValues}
                                            />
                                            <small id="emailHelp" className="form-text text-muted">No compartiremos su correo electrónico con nadie más.</small>
                                        </div>
                                        <div className="form-group m">
                                            <label for="key" className="form-label mt-4">Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="key"
                                                name="key"
                                                placeholder="Contraseña"
                                                required={true}
                                                value={this.state.key}
                                                onChange={this.setValues}
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-primary p-2" type="submit">Registrarme</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>

        );
    }
}