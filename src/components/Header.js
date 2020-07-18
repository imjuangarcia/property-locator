import React from 'react';

import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Buscador de Propiedades</h1>
      </header>
    );
  }
}

export default Header;
