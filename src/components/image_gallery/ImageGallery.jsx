import React, { Component } from 'react';


class ImageGallery extends Component {
  render() {
    return (
      <div className={this.props.card_design}>
        <img src={this.props.background} alt="Avatar" className={this.props.img_design} />
        <div className={this.props.overlay_design}><p className="sub-heading">{this.props.caption}</p></div>
        <div className={this.props.data_design}><p className="image-gallery-heading top-padding-10">{this.props.caption}</p></div>
        <div className={this.props.data_design}><p className="image-gallery-data">{this.props.data}</p></div>
        <div className={this.props.data_design}><p className="image-gallery-heading">{this.props.date}</p></div>
      </div>
    );
  }
}

export default ImageGallery;
