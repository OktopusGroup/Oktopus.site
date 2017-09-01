import React from 'react';

// import scss
import css from './social.scss';

// import media
import facebook from './images/btn-facebook.svg';  
import linkedin from './images/btn-linkedin.svg';  

// import form components
import Button from '../button'

// Create component for button
const Social = (props) => {
    return ( 
      <div className={css.body}>
        <ul>
          <li>
          <Button text={<img src={linkedin} />} classes={css.btnSocial} /> 
          </li>
          <li>
          <Button text={<img src={facebook} />}  classes={css.btnSocial} /> 
          </li>
        </ul>
      </div>
    );

};


export default Social
