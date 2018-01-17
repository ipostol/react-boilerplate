import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { close, getModal } from 'modules/modal';
import ModalService from './ModalService';

const mapStateToProps = createStructuredSelector({
  modal: getModal,
});

const mapDispatchToProps = {
  close,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalService);
