import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar/Navigationbar.jsx';


class NavigationBarView extends Component {

  render() {

const navigation=[

  {
  "option":"Works"
  },
  {
  "option":"About"
  },
  {
  "option":"Services"
  }

]

    return (
      <Grid fluid={true} style={{padding:0}}>

        <NavigationBar navigation={navigation} />

      </Grid>
    );
  }
}

export default NavigationBarView;
