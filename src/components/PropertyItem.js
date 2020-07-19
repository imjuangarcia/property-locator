import React from 'react';

import styles from './PropertyItem.module.css';

class PropertyItem extends React.Component {
  render() {
    return (
      <li className={styles.propertyItem}>
        <a href={ this.props.property.url } target="_blank" rel="noopener noreferrer">
          <div className={styles.imageContainer}>
            <span className={styles.price}>{this.props.property.currency_id} ${this.props.property.price}</span>
            {this.props.property.expenses ? <span className={styles.expenses}>{this.props.property.expenses}</span> : ''}
            <img src={this.props.property.main_image} alt={this.props.property.title} loading="lazy" />
          </div>
          <div className={styles.textContainer}>
            <h2>{this.props.property.title}</h2>
            <p>{this.props.property.description}</p>
            <ul className={styles.features}>
              {this.props.property.bedrooms || this.props.property.rooms ?
                <li>
                  <i className="fas fa-fw fa-bed"></i>
                  {this.props.property.bedrooms || this.props.property.rooms}
                </li> : ''
              }
              {this.props.property.bathrooms ?
                <li>
                  <i className="fas fa-fw fa-toilet"></i>
                  {this.props.property.bathrooms}
                </li> : ''
              }
            </ul>
          </div>
        </a>
        <a
          href={`https://www.google.com/maps?q=loc:${this.props.property.lat},${this.props.property.lon}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          Ver ubicaci&oacute;n en el mapa
        </a>
      </li>
    );
  }
}

export default PropertyItem;
