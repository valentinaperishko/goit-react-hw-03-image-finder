import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.target.nodeName !== 'IMG' || e.code === 'Escape') {
      this.props.hideModal();
    }
  };
  render() {
    return (
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
export default Modal;
