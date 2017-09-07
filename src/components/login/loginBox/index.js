// ----------------------
// IMPORTS

/* ReactQL */
import React from 'react';

/* Local */

// import form components
import Button from 'src/components/form_components/button';
import Input from 'src/components/form_components/input';
import Social from 'src/components/form_components/social';

// Styles
import css from './box.scss';

// Images
import logo from './images/logo.svg';

// ----------------------

const LoginBox = () => (
  <div className={css.body}>
    <img src={logo} alt="Oktopus Logo" />
    <Input type="email" placeholder="username" />
    <Input type="password" placeholder="password" />
    <Social />
    <Button text="Login" />
    <div className={css.bottomLinks}>
      <Button text="Sign up" hasAnchor />
      <Button text="Forgot?" hasAnchor />
    </div>
  </div>
);

export default LoginBox;
