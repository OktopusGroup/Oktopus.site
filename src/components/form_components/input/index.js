import React from 'react';

// import scss 
import css from './input.scss';

const Input = (props) => {
    return ( 
      <section className={css.body}>
        <fieldset>        
           <input           
            max={props.max || null}
            min={props.min || null}
            name={props.name || null}
            placeholder={props.placeholder || null}
            required={props.required || null}
            step={props.step || null}
            type={props.type || 'text'}
           />
       </fieldset>
      </section>
    );

};

export default Input
