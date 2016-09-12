import React, { PropTypes } from 'react';
import styles from './style.css';

const Button = ({ children, ...props }) => (
  <button className={styles.button} {...props}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
