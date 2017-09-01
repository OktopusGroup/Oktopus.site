import React from 'react';

// import scss
import css from './button.scss';


const Button = (props) => {
    return ( 
      <section className={css.btnSection}>
        <a          
          onClick={props.handleClick || ''}
          className={props.classes || ( props.anchor ? css.btnAnchor : css.btnLandingDefault)}
          href={"#"}
        >
          { props.text || 'Button'} 
        </a>

      </section>
    );

};


export default Button
