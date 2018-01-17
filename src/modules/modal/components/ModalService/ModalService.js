import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'frames/Modal';

const ModalService = ({ modal, close }) => {

  const modals = Object.keys(modal);

  if (modals.length) {

    return (
      <div>
        {
          modals.map((name) => {

            const { component: Component, props, modalProps } = modal[name];

            return (
              <Modal isOpened onClose={() => close(name)} {...modalProps} key={name}>
                <Component {...props} close={() => close(name)} />
              </Modal>
            );

          })
        }
      </div>
    );

  }

  return null;

};

ModalService.propTypes = {
  close: PropTypes.func,
  modal: PropTypes.object,
};

export default ModalService;
