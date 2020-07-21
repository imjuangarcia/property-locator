import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <a className="marker" title={`${this.props.title} - $${this.props.price}`} href={this.props.url} rel="noopener noreferrer" target="_blank">
        <i className="fas fa-map-marker fa-2x"></i>
      </a>
    );
  }
}

export default Marker;