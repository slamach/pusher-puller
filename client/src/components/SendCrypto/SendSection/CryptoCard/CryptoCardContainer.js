import { connect } from 'react-redux';
import CryptoCard from './CryptoCard';

function mapStateToProps(state) {
  return {
    account: state.app.account,
    balance: state.app.balance,
  };
}

export default connect(mapStateToProps, null)(CryptoCard);
