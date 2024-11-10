import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
  
const ImageModal = ({ image, onClose }) => (
  <>
    <div className={styles.overlay} onClick={onClose} /> {/* Напівпрозорий чорний фон */}
    <Modal isOpen={true} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  </>
);

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;