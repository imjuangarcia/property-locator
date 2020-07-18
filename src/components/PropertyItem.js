import React from 'react';

import styles from './PropertyItem.module.css';

class PropertyItem extends React.Component {
  render() {
    return (
      <li className={styles.propertyItem}>
        <a href={ this.props.property.url } target="_blank" rel="noopener noreferrer">
          <div className={styles.imageContainer}>
            <span>{this.props.property.currency_id} ${this.props.property.price}</span>
            <img src={this.props.property.main_image} alt={this.props.property.title} loading="lazy" />
          </div>
          <div className={styles.textContainer}>
            <h2>{this.props.property.title}</h2>
            <p>{this.props.property.description}</p>
          </div>
        </a>
      </li>
    );
  }
}

export default PropertyItem;
