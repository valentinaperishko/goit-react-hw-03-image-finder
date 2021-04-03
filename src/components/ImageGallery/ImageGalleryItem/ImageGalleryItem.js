import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ elem, getImgForModal }) => {
  const { webformatURL, tags } = elem;
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.image}
        onClick={() => getImgForModal({ elem })}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  elem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getImgForModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
