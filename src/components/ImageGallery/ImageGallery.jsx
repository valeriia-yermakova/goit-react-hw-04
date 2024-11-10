import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.id}>
        <ImageCard image={image} onClick={() => onImageClick(image)} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;