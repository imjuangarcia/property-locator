import React from 'react';
import Select from 'react-select';

import styles from './SearchForm.module.css';

import Pagination from './Pagination';

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
          label: 'Zona Norte',
          value: 'bs-as-g-b-a-zona-norte'
        }],
        ordering: [{
          name: 'Más Caras',
          value: 'ord:p-d',
        }, {
          name: 'Más Baratas',
          value: 'ord:p-a',
        }, {
          name: 'Fecha',
          value: 'ord:f-d',
        }, {
          name: 'Relevancia',
          value: 'ord:r-d',
        }]
      }
    }
  }

  render() {
    return (
      <React.Fragment>
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
                      required
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
              required
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
            <label htmlFor="ordering">Ordenar por</label>
            <select
              name="ordering"
              defaultValue={this.props.searchCriteria.ordering}
              required
            >
              {
                this.state.searchOptions.ordering.map(
                  (ordering, key) =>
                    <option
                      key={key}
                      value={ordering.value}
                    >
                      {ordering.name}
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
            {this.props.properties.length > 0 ? <Pagination loadMoreResults={this.props.handleLoadMore} /> : ''}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;
