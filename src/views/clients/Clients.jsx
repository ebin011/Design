import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

import ImageGallery from '../../components/image_gallery/ImageGallery.jsx';

class Clients extends Component {

  render() {

const image_path=[

  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  },
  {
  "path": "https://png2.kisspng.com/20180401/hvq/kisspng-2018-fifa-world-cup-2022-fifa-world-cup-russia-zab-world-cup-5ac0610996ef62.4940026415225571936182.png",
  "caption":"Company"
  }

]

    return (
      <Grid>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={6} >
        <span className="small-heading">SELECTED CLIENTS</span>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={12} className="remove-padding padding-16">
        {image_path.map((data, idx)  => (
            <Col xs={12} md={2} className="remove-padding padding-16">
              <ImageGallery background={data.path} caption={data.caption} img_design="image" overlay_design="hide-data" data_design="hide-data"/>
            </Col>
          ))
        }
        </Col>
        </Row>

      </Grid>
    );
  }
}

export default Clients;
