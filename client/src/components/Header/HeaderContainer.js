import { connect } from 'react-redux';
import { connectWallet } from 'state/modules/app';
import Header from './Header';

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
