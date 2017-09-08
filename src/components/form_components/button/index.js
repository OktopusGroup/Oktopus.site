// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Local */

// Styles
import css from './button.scss';

// ----------------------

const Button = props => (
  <a
    className={(props.classes ? props.classes.join(' ') : '') || (props.hasAnchor ? css.btnAnchor : css.btnLandingDefault)}
    href="" >{props.text || ''}</a>
);

Button.propTypes = {
  hasAnchor: PropTypes.bool.isRequired,
  classes: PropTypes.array,
  text: PropTypes.string,
};

Button.defaultProps = {
  hasAnchor: false,
  classes: null,
  text: null,
};

export default Button;
