import { useState, useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Loader/Loader';
import SearchBar from 'components/Searchbar/Searchbar';
import { fetchImage } from 'services/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

function App() {
  const [searchImage, setSearchImage] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [reqStatus, setReqStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});

  useEffect(() => {
    if (!searchImage) {
      return;
    }
    async function onFetchImage() {
      try {
        setReqStatus('pending');

        const images = await fetchImage(searchImage, page);

        if (!images.length) {
          throw new Error();
        }

        setImages(prevState => [...prevState, ...images]);
        setReqStatus('resolved');
      } catch (err) {
        setReqStatus('rejected');
        toast.error('Not found');
      }
    }
    onFetchImage();

    page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }, [page, searchImage]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSearchChange = searchImage => {
    reset();
    setSearchImage(searchImage);
  };

  const reset = () => {
    setSearchImage(null);
    setImages([]);
    setPage(1);
    setReqStatus('idle');
  };

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const handleOpenImage = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchChange} />
      {reqStatus === 'pending' && <Spinner size="50" color="blue" />}
      <ImageGallery images={images} openLargeImage={handleOpenImage} />
      <Toaster />
      {images.length > 0 && <Button onClick={onLoadMore} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </Modal>
      )}
    </div>
  );
}

export default App;
