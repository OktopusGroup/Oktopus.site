import React from 'react';

// import scss
import css from './social.scss';

// import form components
import Button from '../button';

// Create component for button
const Social = () => (
  <div className={css.body}>
    <ul>
      <li><Button classes={[css.btnSocial, css.facebook]} /></li>
      <li><Button classes={[css.btnSocial, css.linkedin]} /></li>
    </ul>
  </div>
);

export default Social;
