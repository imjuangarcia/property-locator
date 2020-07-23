import React from 'react';

import PropertyItem from './PropertyItem';
import EmptyState from './EmptyState';
import Map from './Map';

import styles from './PropertyList.module.css';

class PropertyList extends React.Component {
  render() {
    return (
      <section className={styles.properties}>
        {/* <PropertyFilters
          filters={this.props.filters}
          handleFiltersForm={this.props.handleFiltersForm}
          handleSearch={this.props.handleSearch}
          defaultView={this.props.defaultView}
          toggleDefaultView={this.props.toggleDefaultView}
        /> */}
          <ul className={styles.propertyList}>
            {
              this.props.properties.length ?
                this.props.properties.map(
                  (property, key) =>
                    <PropertyItem
                      key={key}
                      property={property}
                    />
                ) :
                <EmptyState />
            }
          </ul>
          {/* <Map
            properties={this.props.properties}
          />
        } */}
      </section>
    );
  }
}

export default PropertyList;
