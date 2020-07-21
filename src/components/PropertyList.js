import React from 'react';

import PropertyItem from './PropertyItem';
import PropertyFilters from './PropertyFilters';
import EmptyState from './EmptyState';

import styles from './PropertyList.module.css';

class PropertyList extends React.Component {
  render() {
    return (
      <section className={styles.properties}>
        <PropertyFilters
          filters={this.props.filters}
          handleFiltersForm={this.props.handleFiltersForm}
          handleSearch={this.props.handleSearch}
        />
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
      </section>
    );
  }
}

export default PropertyList;
