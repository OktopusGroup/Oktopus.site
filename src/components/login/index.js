// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import Helmet from 'react-helmet';

/* Local */

// Components
import Header from 'src/components/form_components/header';
import LoginBox from './loginBox';

// Styles
import css from './login.scss';

// Images

// ----------------------

export default () => (
  <div >
    <Helmet
      title="Oktopus: Login"
      meta={[
        {
          name: 'author',
          content: 'Oktopus.io',
        },
      ]} />
    <Header />
    <div className={css.body}>
      <p> Where social communities are born </p>
      <LoginBox />
    </div>
  </div>
);
