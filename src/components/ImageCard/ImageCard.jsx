import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;