import React, { Component } from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import './Tab.css'


class ImageGallery extends Component {
  render() {
    return (
      <div className={this.props.tab_design}>
      <hr className="horizontal-line"/>
      <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
      {this.props.social_media.map((data, idx)  => (
        <Tab eventKey={idx} title={data.caption} className="tab-style">
          <div className="small-heading " style={{width:"50%"}}>{data.content}</div>
        </Tab>
      ))}
      </Tabs>
      <hr/>
      </div>
    );
  }
}

export default ImageGallery;
