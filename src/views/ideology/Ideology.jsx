import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Card from '../../components/card/Card.jsx';
import DataCard from '../../components/data_card/DataCard.jsx';
import OverlayImage from '../../components/overlay-image/OverlayImage.jsx';
import ServiceImages from '../../assessets/images/computer-room.jpg';

class Ideology extends Component {

  render() {

    const absStyle = {
          position:'absolute',
          top:'40px',
          left:"40px"
        };
    return (
      <Grid>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={6} className="remove-padding">
            <DataCard small_heading="OUR IDEOLOGY" small_heading_style="left-align small-heading"
                      data_heading="Lorem ipsum dolar sit" data_heading_style="data-heading"
                      data_description="Lorem ipsum simply dummy text of the printing typeset-tiny industry.Loreum ipsum has been the industry's standard" data_description_style="left-align data-description"
                      button_label="LEARN MORE" button_label_style="button-heading"/>
        </Col>
        <Col xs={12} md={6} className="remove-padding padding-16">
          <OverlayImage background={ServiceImages} rel_design=" card-350 yellow-card" abs_design="absolute-position card-350 overlay-image"/>
        </Col>
        <Col xs={12} md={6} className="remove-padding padding-16">
          <DataCard small_heading="SELECTED WORKS" small_heading_style="left-align small-heading"
                    data_heading="We are chaning the way creative andcompanies connect and collaborate." data_heading_style="data-heading"
                    data_description="" data_description_style="hide-data"
                    button_label="" button_label_style="hide-data"/>
        </Col>
        </Row>

      </Grid>
    );
  }
}

export default Ideology;
