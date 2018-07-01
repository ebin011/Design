import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className={this.props.card_design}>
        <img src={this.props.background} alt="Avatar" className={this.props.img_design} />
        <div className={this.props.overlay_design}><p className="sub-heading">User Experience Design</p></div>
      </div>
    );
  }
}

export default Card;
