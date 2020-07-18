import React from 'react';

class PropertyList extends React.Component {
  render() {
    return (
      <section className="properties">
        <ul className="property-list">
          {
            this.props.properties.map(
              (property, key) =>
              <li key={key}>
                <a href={ property.url }>
                  <img src={property.main_image} alt={property.title} />
                  <h2>{property.title}</h2>
                  <p>{property.description}</p>
                  <p>Precio: {property.currency_id} {property.price}</p>
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
