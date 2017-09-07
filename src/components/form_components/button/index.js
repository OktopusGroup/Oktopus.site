import React from 'react';

// import scss
import css from './button.scss';


const Button = (props) => {
    return ( 
      
        <a          
          onClick={props.handleClick || ''}
          className={props.classes || ( props.anchor ? css.btnAnchor : css.btnLandingDefault)}
          href={"#"}
        >
          { props.text || 'Button'} 
        </a>

     
    );

};


export default Button
