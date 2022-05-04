import { connect } from 'react-redux';
import { connectWallet } from 'state/modules/app';
import About from './About';

function mapStateToProps(state) {
  return {
    account: state.app.account,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    connectWallet: () => dispatch(connectWallet())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
