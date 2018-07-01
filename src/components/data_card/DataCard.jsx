import React, { Component } from 'react';


class DataCard extends Component {
  render() {
    return (
      <div>
          <div className={this.props.small_heading_style}>{this.props.small_heading}</div>
          <h1 className={this.props.data_heading_style}>{this.props.data_heading}</h1>
          <p className={this.props.data_description_style}>{this.props.data_description}</p>
          <div className={this.props.button_label_style}><span className="button-arrow">-></span>{this.props.button_label}</div>
      </div>

    );
  }
}

export default DataCard;
