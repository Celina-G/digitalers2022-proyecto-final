import React from "react";
import { Component } from "react";
import Header from './Header';
import '../resources/css/bootstrap.css';


export default class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
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
                title: "",
                body: ""
            }
        );
    }

    postPublication = (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/publications/insert";
        const publication = {
            title: this.state.title,
            body: this.state.body
        }
        const header = {
            method: "POST",
            body: JSON.stringify(publication),
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
                window.location.href = "/publications/new-publication";
            })
            .catch(error => {
                console.error(error);
                alert("Credenciales Incorrectas");
            });
        this.cleanValues();
    }

    render() {
        return (

            <>
                <div><Header /></div>
                <div className="container w-75 mt-5 shadow rounded " >
                    <div className="row align-items-stretch">
                        <form onSubmit={this.postPublication}>
                            <fieldset>

                                <div className="form-group">
                                    <label className="col-form-label mt-4" for="title">Título</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Título"
                                        id="title"
                                        name="title"
                                        required={true}
                                        value={this.state.title}
                                        onChange={this.setValues}
                                    />
                                </div>

                                <div className="form-group">
                                    <label for="body" class="form-label mt-4">Cuerpo de texto</label>
                                    <textarea class="form-control" id="body" rows="3"
                                        required={true}
                                        value={this.state.body}
                                        onChange={this.setValues}></textarea>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary mt-2">Publicar</button>
                        </form>
                    </div>

                </div>
            </>

        );
    }
}