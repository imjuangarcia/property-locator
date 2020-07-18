import React from 'react';
import Select from 'react-select';

import styles from './SearchForm.module.css';

class SearchForm extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      searchOptions: {
        operationType: [{
          name: 'Venta',
          value: 'venta',
        }, {
          name: 'Alquiler',
          value: 'alquiler',
        }, {
          name: 'Alquiler Temporal',
          value: 'alquiler-temporal',
        }],
        property: [{
          name: 'Todas',
          value: 'propiedades',
        }, {
          name: 'Casas',
          value: 'casa',
        }, {
          name: 'Departamentos',
          value: 'departamento',
        }, {
          name: 'Countries y Barrios Cerrados',
          value: 'country-barrio-cerrado',
        }, {
          name: 'Quintas',
          value: 'quinta',
        }, {
          name: 'Terrenos',
          value: 'terreno'
        }],
        places: [{
          label: 'Escobar',
          value: 'escobar'
        }, {
          label: 'Ing. Auschwitz',
          value: 'maschwitz'
        }, {
          label: 'Pilar',
          value: 'pilar'
        }]
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="operationType">Tipo de Operaci&oacute;n</label>
          <select
            name="operationType"
            defaultValue={this.props.searchCriteria.operationType}
          >
            {
              this.state.searchOptions.operationType.map(
                (operationType, key) => 
                  <option
                    key={key}
                    value={operationType.value}
                  >
                    {operationType.name}
                  </option>
              )
            }
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="property">Propiedad</label>
          <select
            name="property"
            defaultValue={this.props.searchCriteria.property}
          >
            {
              this.state.searchOptions.property.map(
                (property, key) => 
                  <option
                    key={key}
                    value={property.value}
                  >
                    {property.name}
                  </option>
              )
            }
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="places">Lugares</label>
          <Select
            options={this.state.searchOptions.places}
            isMulti
            name="places"
          />
        </div>
        <div className={styles.ctaGroup}>
          <input type="submit" value="Buscar" />
        </div>
      </form>
    );
  }
}

export default SearchForm;
