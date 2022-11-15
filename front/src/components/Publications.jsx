import React, { Component } from 'react';
import Header from './Header';
import Publication from './Publication';
import '../resources/css/bootstrap.css';



export default class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/publications/findAll")
      .then(response => response.json())
      .then(json => {
        this.setState({
          publications: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    const { DataisLoaded, publications } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Loading.... </h1> </div>

    return (
      <>
        <div><Header /></div>

        <div className='container overflow-auto w-80 mt-5'>
          {
            publications.map(publication => {
              return <Publication title={publication.title} body={publication.body}/>
            })
          }

        </div>
      </>
    )
  }

}
