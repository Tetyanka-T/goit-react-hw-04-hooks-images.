import { createPortal } from 'react-dom';
import s from 'components/Modal/Modal.module.css';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackDropClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}
