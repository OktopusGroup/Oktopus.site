import React from 'react';

// import scss
import css from './social.scss';

// import media
import facebook from './images/FbLogin.svg';
import linkedin from './images/LiLogin.svg';

// import form components
import Button from '../button';

const LinkedIn = <img src={linkedin} alt="LinkedIn" />;
const Facebook = <img src={facebook} alt="Facebook" />;

// Create component for button
const Social = () => (
  <div className={css.body}>
    <ul>
      <li><Button text={LinkedIn} classes={css.btnSocial} /></li>
      <li><Button text={Facebook} classes={css.btnSocial} /></li>
    </ul>
  </div>
);

export default Social;
