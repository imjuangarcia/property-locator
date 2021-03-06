import React from 'react';

import styles from './PropertyItem.module.css';

class PropertyItem extends React.Component {
  render() {
    return (
      <li className={styles.propertyItem}>
        <a href={ this.props.property.url } target="_blank" rel="noopener noreferrer">
          <div className={styles.imageContainer}>
            <span className={styles.price}>${this.props.property.price}</span>
            {/* {this.props.property.expenses ? <span className={styles.expenses}>{this.props.property.expenses}</span> : ''} */}
            <img src={this.props.property.image} alt={this.props.property.title} loading="lazy" />
          </div>
          <div className={styles.textContainer}>
            <h2>{this.props.property.title}</h2>
            <p>{this.props.property.description}</p>
            <ul className={styles.features}>
              {this.props.property.ambients ?
                <li>
                  <i className="fas fa-fw fa-bed"></i>
                  {this.props.property.ambients }
                </li> : ''
              }
              {this.props.property.toilets ?
                <li>
                  <i className="fas fa-fw fa-toilet"></i>
                  {this.props.property.toilets}
                </li> : ''
              }
            </ul>
          </div>
        </a>
        <a
          href={this.props.location ? `https://www.google.com/maps/search/${this.props.property.location}` : `https://www.google.com/maps/search/${this.props.property.address}`}
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
