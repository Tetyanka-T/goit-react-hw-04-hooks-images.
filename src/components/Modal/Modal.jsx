import { createPortal } from 'react-dom';
import s from 'components/Modal/Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={handleBackDropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}
