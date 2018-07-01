import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Tab from '../../components/tab/Tab.jsx'


class Footer extends Component {
  render() {
    const social_media_path=[

      {
      "path": "https://thumbs.dreamstime.com/b/stack-books-library-bookshelf-square-composition-against-blurry-background-67617608.jpg",
      "caption":"Facebook",
      "content":"Lorem Ipsum is simply a dummy text of the printing and type setting industry, Lorem ipsum has been the industry stanard dummy text ever since the 1500s, when an umknown"
      },
      {
      "path": "https://thumbs.dreamstime.com/b/cute-little-kid-boy-books-backpack-green-nature-background-square-95550254.jpg",
      "caption":"Instagram",
      "content":"Lorem Ipsum is simply a dummy text of the printing and type setting industry, Lorem ipsum has been the industry stanard dummy text ever since the 1500s, when an umknown"
      },
      {
      "path": "https://s3.envato.com/files/213175984/preview.jpg",
      "caption":"Linked In",
      "content":"Lorem Ipsum is simply a dummy text of the printing and type setting industry, Lorem ipsum has been the industry stanard dummy text ever since the 1500s, when an umknown"
      },
      {
      "path": "https://ae01.alicdn.com/kf/HTB1FkImKpXXXXa1XpXXq6xXFXXXo/Free-Shipping-12PCS-Tea-Time-Heart-Tea-Infuser-in-Elegant-White-Gift-Box-Nice-Souvenirs-Ceremony.jpg_640x640.jpg",
      "caption":"Twitter",
      "content":"Lorem Ipsum is simply a dummy text of the printing and type setting industry, Lorem ipsum has been the industry stanard dummy text ever since the 1500s, when an umknown"
      }

    ]
    return (
      <Grid>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={12} >
            <Tab social_media={social_media_path} />
        </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
