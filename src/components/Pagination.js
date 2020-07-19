import React from 'react';

import styles from './Pagination.module.css';

class Pagination extends React.Component {
  render() {
    return (
      <div className={styles.paginationContainer}>
        <button
          onClick={this.props.loadMoreResults}
        >
          Cargar 20 m&aacute;s
        </button>
      </div>
    );
  }
}

export default Pagination;
