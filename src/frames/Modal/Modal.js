import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactModal from 'react-modal';
import styles from './Modal.scss';

const Modal = ({ children, isOpened, onClose, isCustom, isForm, className }) => {

  if (isOpened) {

    if (isCustom) {

      return (
        <ReactModal
          className={cn('custom', className)}
          isOpen
          overlayClassName={styles.overlay}
          onRequestClose={onClose}
          contentLabel=""
        >
          {
            children
          }
        </ReactModal>
      );

    }

    return (
      <ReactModal
        className={cn(styles.general, className)}
        isOpen
        overlayClassName={styles.overlay}
        onRequestClose={onClose}
        contentLabel=""
      >
        <div className={cn(styles.modal, { [styles.form]: isForm })}>
          {
            children
          }
        </div>
      </ReactModal>
    );

  }

  return null;

};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
  isCustom: PropTypes.bool,
  isForm: PropTypes.bool,
};

export default Modal;
