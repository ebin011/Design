import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import {DropdownButton,MenuItem} from 'react-bootstrap';
import ImageGallery from '../../components/image_gallery/ImageGallery.jsx';


class ImageFilter extends Component {

  render() {

const image_path=[

  {
  "path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOIycrwE0xBx3d1ryuniOt9Ry3jYaJMzbb5k_1vu-M5H-_LZ2",
  "caption":"Sample1"
  },
  {
  "path": "https://image.freepik.com/free-vector/background-with-colorful-squares_23-2147498832.jpg",
  "caption":"Sample2"
  },
   {
  "path": "https://thumbs.dreamstime.com/b/abstract-white-blue-square-background-vector-eps-52009354.jpg",
  "caption":"Sample3"
  },
  {
  "path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3IcNOfzkGYdrtYxr2qneGI5NfNkJTerV9BOiUXq4GmKx1jgiAA",
  "caption":"Sample4"
  },
  {
  "path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCQ497IZ02-Ktr2TJHFebR5gpKvc1vX4z6ucmRGnl6_-EDt5Cdw",
  "caption":"Sample5"
  },
  {
   "path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkOSubsBvdCjP1kMaRT82g_YCp04UVK2_EXyNYuQINXUpuMdBbA",
   "caption":"Sample6"
  }

]

    return (
      <Grid>
        <Row className="show-grid top-padding-50">
        <Col xs={12} md={6} >
        <span className="data-description">Filter by</span><DropdownButton
          bsSize="large"
          title="All"
          id="dropdown-size-large"
          className="dropdown-style"
        >
      <MenuItem eventKey="1">All</MenuItem>
      <MenuItem eventKey="2">Type 1</MenuItem>
      <MenuItem eventKey="3">Type 2</MenuItem>
    </DropdownButton>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={12} className="remove-padding padding-16">
        {image_path.map((data, idx)  => (
            <Col xs={12} md={4} className="remove-padding padding-16">
              <ImageGallery background={data.path} caption={data.caption} img_design="image" overlay_design="overlay-text-bottom" data_design="hide-data"/>
            </Col>
          ))
        }
        </Col>
        <Col xs={12} md={12} className="center-align"> <span className="small-heading">Load More...</span></Col>
        </Row>

      </Grid>
    );
  }
}

export default ImageFilter;
