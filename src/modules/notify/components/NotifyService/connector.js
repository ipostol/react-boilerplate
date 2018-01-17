import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getNotify } from 'modules/notify';
import NotifyService from './NotifyService';

const mapStateToProps = createStructuredSelector({
  notify: getNotify,
});

export default connect(mapStateToProps)(NotifyService);
