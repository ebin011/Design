import React, { Component } from 'react';
import './Home.css';
//import { Button } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="center-align home-page">
        <div className="hero-unit">
          <h1 className="top heading">Lorem ipsum dolar sit</h1>
          <p className="center description">Lorem ipsum simply dummy text of the printing typeset-tiny industry.Loreum ipsum has been the industry's standard</p>
          <button className=" bottom shadow button-style">DISCOVER</button>
        </div>
        <div className="hero-data">
        <p className="sub-heading">OUR SERVICES</p>
        <p className="sub-heading"> We are bombared with informations, we strip back the unnecessary to deliver simple <span className="text-red">experiences</span></p>
        </div>
      </div>
    );
  }
}

export default Home;
