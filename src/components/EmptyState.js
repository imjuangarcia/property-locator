import React from 'react';

import styles from './EmptyState.module.css';

class EmptyState extends React.Component {
  render() {
    return (
      <li className={styles.empty}>
        <i className="fas fa-laptop-house fa-4x"></i>
        <h3>No hay resultados disponibles.</h3>
        <p>Prob&aacute; con otros t&eacute;rminos de b&uacute;squeda.</p>
      </li>
    );
  }
}

export default EmptyState;
