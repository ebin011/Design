import React, { Component } from 'react';


class OverlayImage extends Component {
  render() {
    return (
      <div className={this.props.rel_design}>
        <div className={this.props.abs_design}>
          <img src={this.props.background} alt="Avatar"  />
        </div>
      </div>
    );
  }
}

export default OverlayImage;
