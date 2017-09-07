import React from 'react';

// import scss
import css from './input.scss';

const Input = props => (
  <section className={css.body}>
    <fieldset>
      <input {...props} />
    </fieldset>
  </section>
);

export default Input;
