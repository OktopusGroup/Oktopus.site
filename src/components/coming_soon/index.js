// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import Helmet from 'react-helmet';

/* Turfmob */

// Styles
import css from './coming_soon.scss';

// Images
import logo from './logo.png';

// ----------------------

export default () => (
  <div className={css.logo}>
    <Helmet
      title="Oktopus: Coming soon"
      meta={[
        {
          name: 'author',
          content: 'Oktopus.io',
        },
      ]} />
    <img src={logo} alt="Oktopus: Coming soon!" />
  </div>
);
