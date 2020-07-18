import React from 'react';

import PropertyItem from './PropertyItem';

import styles from './PropertyList.module.css';

class PropertyList extends React.Component {
  render() {
    return (
      <section className={styles.properties}>
        <ul className={styles.propertyList}>
          {
            this.props.properties.map(
              (property, key) =>
              <PropertyItem
                key={key}
                property={property}
              />
            )
          }
        </ul>
      </section>
    );
  }
}

export default PropertyList;
