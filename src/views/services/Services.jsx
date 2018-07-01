import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Card from '../../components/card/Card.jsx';
import ServiceImages from '../../assessets/images/computer-room.jpg';

class Services extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid top-padding-50" style={{marginTop:"5%",marginBottom:"10%"}}>
        <Col xs={12} md={3} className="remove-padding">
          <Card background={ServiceImages} card_design="card organge-shade fixed-height-card green-card" img_design="image opacity-low" overlay_design="overlay-text" />
        </Col>
        <Col xs={12} md={3} className="remove-padding">
          <Card background={ServiceImages} card_design="card organge-shade fixed-height-card green-card" img_design="image opacity-low" overlay_design="overlay-text" />
        </Col>
        <Col xs={12} md={3} className="remove-padding">
          <Card background={ServiceImages} card_design="card organge-shade fixed-height-card green-card" img_design="image opacity-low" overlay_design="overlay-text"/>
        </Col>
        <Col xs={12} md={3} className="remove-padding">
          <Card background={ServiceImages} card_design="card organge-shade fixed-height-card green-card" img_design="image opacity-low" overlay_design="overlay-text" />
        </Col>
        </Row>
        <div className="hero-data center-align">
        <p className="sub-heading">OUR SERVICES</p>
        <p className="sub-heading"> We are bombared with informations, we strip back the unnecessary to deliver simple <span className="text-red">experiences</span></p>
        <p className="center image-gallery-data" s>Lorem ipsum simply dummy text of the printing typeset-tiny industry.Loreum ipsum has been the industry's standard</p>
        <button className=" bottom shadow button-style" >LEARN MORE.</button>
        </div>
      </Grid>
    );
  }
}

export default Services;
