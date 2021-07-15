import PropTypes from 'prop-types';
import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, openLargeImage }) {
  return (
    <li
      key={image.id}
      className={s.ImageGalleryItem}
      onClick={() => openLargeImage(image)}
    >
      <img
        src={image.webformatURL}
        alt={image.tag}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  openLargeImage: PropTypes.func.isRequired,
};
