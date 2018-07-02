import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

import ImageGallery from '../../components/image_gallery/ImageGallery.jsx';


class Experiments extends Component {

  render() {

const image_path=[

  {
  "path": "https://thumbs.dreamstime.com/b/stack-books-library-bookshelf-square-composition-against-blurry-background-67617608.jpg",
  "caption":"USER EXPERIENCE",
  "data":"Lorem Ipsum is simply dummy textof the printing",
  "date":"MARCH 15,2018"
  },
  {
  "path": "https://thumbs.dreamstime.com/b/cute-little-kid-boy-books-backpack-green-nature-background-square-95550254.jpg",
  "caption":"USER EXPERIENCE",
  "data":"Lorem Ipsum is simply dummy textof the printing",
  "date":"MARCH 15,2018"
  },
  {
  "path": "https://s3.envato.com/files/213175984/preview.jpg",
  "caption":"USER EXPERIENCE",
  "data":"Lorem Ipsum is simply dummy textof the printing",
  "date":"MARCH 15,2018"
  },
  {
  "path": "https://ae01.alicdn.com/kf/HTB1FkImKpXXXXa1XpXXq6xXFXXXo/Free-Shipping-12PCS-Tea-Time-Heart-Tea-Infuser-in-Elegant-White-Gift-Box-Nice-Souvenirs-Ceremony.jpg_640x640.jpg",
  "caption":"USER EXPERIENCE",
  "data":"Lorem Ipsum is simply dummy textof the printing",
  "date":"MARCH 15,2018"
  }

]

    return (
      <Grid>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={12} className="center-align">
        <span className="data-heading">Thought & Experiments</span>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={12} className="remove-padding padding-16">
        {image_path.map((data, idx)  => (
            <Col xs={12} md={3} className="remove-padding padding-16">
              <ImageGallery background={data.path} caption={data.caption} data={data.data} date={data.date} img_design="image" overlay_design="hide-data"/>
            </Col>
          ))
        }
        </Col>
        <Col xs={12} md={12}>
          <div className="button-heading center-align"><span className="button-arrow">-></span>VIEW ALL POSTS</div>
        </Col>
        <Col xs={12} md={12}>
          <div className="data-heading center-align top-padding-100">We are a technology <span className="text-red">design</span> studio|. </div>
        </Col>
        <Col xs={12} md={12}>
          <div className="button-heading center-align top-padding-5"><span className="button-arrow">-></span>START A PROJECT</div>
        </Col>
        </Row>

      </Grid>
    );
  }
}

export default Experiments;
