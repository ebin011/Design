import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Card from '../../components/card/Card.jsx';
import ServiceImages from '../../assessets/images/computer-room.jpg';

class ImageGrid extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={6} className="remove-padding">
          <Card background={ServiceImages} card_design="card black-shade large-height-card "img_design="image opacity-medium" overlay_design="overlay-text" />
        </Col>
        <Col xs={12} md={6} className="remove-padding">
          <Col xs={12} md={6} className="padding-4 top-padding-0">
            <Card background={ServiceImages} card_design="card  fixed-height-card" img_design="image"overlay_design="hide-data" />
          </Col>
          <Col xs={12} md={6} className="padding-4 left-padding-0 top-padding-0">
            <Card background={ServiceImages} card_design="card fixed-height-card" img_design="image" overlay_design="hide-data"/>
          </Col>
          <Col xs={12} md={6} className="padding-4 top-padding-0">
            <Card background={ServiceImages} card_design="card fixed-height-card" img_design="image" overlay_design="hide-data"/>
          </Col>
          <Col xs={12} md={6} className="padding-4 left-padding-0 top-padding-0">
            <Card background={ServiceImages} card_design="card  fixed-height-card" img_design="image" overlay_design="hide-data"/>
          </Col>
        </Col>
        </Row>

      </Grid>
    );
  }
}

export default ImageGrid;
