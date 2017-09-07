// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Local */

// Styles
import css from './header.scss';

// Images
import logo from './images/logo.svg';

// ----------------------

// Create component for button
const Header = () => (
  <div className={css.body}>
    <img src={logo} alt="Oktopus" />
  </div>
);

export default Header;
