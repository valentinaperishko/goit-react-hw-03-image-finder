import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ getNewPage }) => {
  return (
    <button
      className={styles.Button}
      type="button"
      data-action="load-more"
      onClick={getNewPage}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  getNewPage: PropTypes.func.isRequired,
};
export default Button;
