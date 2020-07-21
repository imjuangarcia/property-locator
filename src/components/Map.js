import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './Map.module.css';
import Marker from './Marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -34.443128,
      lng: -58.6063924
    },
    zoom: 12
  };

  render() {
    return (
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDHD0zNvmxrK215Psdhktw0p6U_oASWUHE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.properties.map((property, key) =>
            property.lat && property.lon ?
            <Marker
              lat={property.lat}
              lng={property.lon}
              title={property.title}
              url={property.url}
              price={property.price}
              key={key}
            /> : ''
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;