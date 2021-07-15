import { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from 'components/Loader/Loader';
import SearchBar from 'components/Searchbar/Searchbar';
import { fetchImage } from 'services/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    searchImage: null,
    images: [],
    page: 1,
    reqStatus: 'idle',
    showModal: false,
    largeImage: {},
  };

  async componentDidUpdate(_, prevState) {
    const { searchImage, page } = this.state;
    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      try {
        this.setState({ reqStatus: 'pending' });

        const images = await fetchImage(searchImage, page);

        if (!images.length) {
          throw new Error();
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          reqStatus: 'resolved',
        }));
      } catch (err) {
        this.setState({ reqStatus: 'rejected' });
        toast.error('Not found');
      }
    }

    page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchChange = searchImage => {
    this.reset();
    this.setState({ searchImage });
  };

  reset = () => {
    this.setState({
      searchImage: null,
      images: [],
      page: 1,
      reqStatus: 'idle',
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOpenImage = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  render() {
    const { images, reqStatus, showModal, largeImage } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.handleSearchChange} />
        {reqStatus === 'pending' && <Spinner size="50" color="blue" />}
        <ImageGallery images={images} openLargeImage={this.handleOpenImage} />
        <Toaster />
        {images.length > 0 && <Button onClick={this.onLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
      </div>
    );
  }
}
