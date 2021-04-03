import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from '../../common/Modal';

class ImageGallery extends Component {
  state = {
    elem: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  getImgForModal = ({ elem }) => {
    if (elem) {
      this.toggleModal();
      this.setState({
        elem,
      });
    }
  };
  render() {
    const { showModal, elem } = this.state;
    const { gallery } = this.props;
    const { tags, largeImageURL } = elem;
    return (
      <ul className={styles.ImageGallery}>
        {gallery.map(item => {
          return (
            <ImageGalleryItem
              key={item.id}
              elem={item}
              getImgForModal={this.getImgForModal}
            />
          );
        })}
        {showModal && (
          <Modal hideModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ImageGallery;
