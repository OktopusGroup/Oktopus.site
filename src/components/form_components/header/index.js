import React from 'react';

// import scss
import css from './header.scss'

// import media
import logo from './images/logo.svg'

// Create component for button
const Header = (props) => {
    return ( 
      <div className={css.body}>
        <img src={logo} />
      </div>
    );

};

export default Header
