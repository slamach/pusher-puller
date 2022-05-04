import { connect } from 'react-redux';
import { initializeConnection } from 'state/modules/app';
import App from './App';

function mapStateToProps(state) {
  return {
    notification: state.app.notification,
    notificationStatus: state.app.notificationStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initializeConnection: () => dispatch(initializeConnection()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
