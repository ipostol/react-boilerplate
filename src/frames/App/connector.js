import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { open } from 'modules/modal';
import App from './App';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  open,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
