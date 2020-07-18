import React from 'react';

import styles from './Loading.module.css';

class Loading extends React.Component {
  render() {
    return (
      <section className={styles.loading}>
        <i class="fas fa-spinner fa-pulse"></i>
        <h3>Cargando...</h3>
      </section>
    );
  }
}

export default Loading;
