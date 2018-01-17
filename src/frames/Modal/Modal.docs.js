import React from 'react';
import Modal from './Modal';

export default () => (
  <div style={{ height: '100%' }}>
    <Modal onClose={() => console.log('close')} />
  </div>
);
