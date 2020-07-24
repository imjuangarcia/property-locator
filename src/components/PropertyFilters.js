import React from 'react';

import styles from './PropertyFilters.module.css';

class PropertyFilters extends React.Component {
  render() {
    return (
      <div className={styles.propertyFilters}>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="ambients">Ambientes:</label>
            <input
              name="ambients"
              required
              defaultValue={this.props.filters.ambients}
              type="number"
              onChange={this.props.handleFiltersForm}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="surface">Superficie:</label>
            <select
              name="surface"
              required
              defaultValue={this.props.filters.surface}
              onChange={this.props.handleFiltersForm}
            >
              <option value="all">Todos</option>
              <option value="0-49">Hasta 49 (Caja de Zapatos)</option>
              <option value="50-99">50 - 99</option>
              <option value="100-149">100 - 149</option>
              <option value="150-199">150 - 199</option>
              <option value="200-+">M&aacute;s de 200</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="priceRange">Rango de Precio:</label>
            <select
              name="priceRange"
              required
              defaultValue={this.props.filters.priceRange}
              onChange={this.props.handleFiltersForm}
            >
              <option value="all">Todos</option>
              <option value="0-30">$0 - $30.000 (Rata Style)</option>
              <option value="30-60">$30.000 - $60.000</option>
              <option value="60-90">$60.000 - $90.000</option>
              <option value="90-120">$90.000 - $120.000</option>
              <option value="120-+">M&aacute;s de $120.000 (Millonario)</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="search">Buscar:</label>
            <input
              type="text"
              placeholder="Ej.: Arboleda Añeja, Vecinos que no te espían, etc"
              onChange={this.props.handleSearch}
            />
          </div>
          {/* <div className={styles.toggleView}>
            <ul>
              <li>
                <button
                  className={this.props.defaultView === 'grid' ? styles.active : ''}
                  onClick={this.props.toggleDefaultView}
                >
                  <i className="fas fa-th fa-lg"></i>
                </button>
              </li>
              <li>
                <button
                  className={this.props.defaultView === 'map' ? styles.active : ''}
                  onClick={this.props.toggleDefaultView}
                >
                  <i className="fas fa-map fa-lg"></i>
                </button>
              </li>
            </ul>
          </div> */}
        </form>
      </div>
    );
  }
}

export default PropertyFilters;
