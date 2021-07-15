import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ images, openLargeImage }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openLargeImage={openLargeImage}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  openLargeImage: PropTypes.func.isRequired,
};
