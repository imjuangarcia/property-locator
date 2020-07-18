import React from 'react';

import styles from './PropertyList.module.css';

class PropertyList extends React.Component {
  render() {
    return (
      <section className={styles.properties}>
        <ul className={styles.propertyList}>
          {
            this.props.properties.map(
              (property, key) =>
              <li key={key}>
                <a href={ property.url } target="_blank" rel="noopener noreferrer">
                  <div className={styles.imageContainer}>
                    <span>{property.currency_id} ${property.price}</span>
                    <img src={property.main_image} alt={property.title} />
                  </div>
                  <div className={styles.textContainer}>
                    <h2>{property.title}</h2>
                    <p>{property.description}</p>
                  </div>
                </a>
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default PropertyList;
