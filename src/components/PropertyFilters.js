import React from 'react';

import styles from './PropertyFilters.module.css';

class PropertyFilters extends React.Component {
  render() {
    return (
      <div className={styles.propertyFilters}>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="ambients">Ambientes:</label>
            <select
              name="ambients"
              required
              defaultValue={this.props.filters.ambients}
              onChange={this.props.handleFiltersForm}
            >
              <option value="all">Todos</option>
              <option value="1">1 ambiente</option>
              <option value="2">2 ambientes</option>
              <option value="3">3 ambientes</option>
              <option value="4">4 ambientes</option>
              <option value="5">5 ambientes o m&aacute;s</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="coveredSurface">Superficie Cubierta:</label>
            <select
              name="coveredSurface"
              required
              defaultValue={this.props.filters.coveredSurface}
              onChange={this.props.handleFiltersForm}
            >
              <option value="all">Todos</option>
              <option value="0-49">Hasta 49</option>
              <option value="50-99">50 - 99</option>
              <option value="100-149">100 - 149</option>
              <option value="150-199">150 - 199</option>
              <option value="200-+">M&aacute;s de 200</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="totalSurface">Superficie Total:</label>
            <select
              name="totalSurface"
              required
              defaultValue={this.props.filters.totalSurface}
              onChange={this.props.handleFiltersForm}
            >
              <option value="all">Todos</option>
              <option value="0-49">Hasta 49</option>
              <option value="50-99">50 - 99</option>
              <option value="100-149">100 - 149</option>
              <option value="150-199">150 - 199</option>
              <option value="200-+">M&aacute;s de 200</option>
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
          <div className={styles.toggleView}>
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
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default PropertyFilters;
