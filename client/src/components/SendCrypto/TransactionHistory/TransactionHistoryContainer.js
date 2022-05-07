import { connect } from 'react-redux';
import TransactionHistory from './TransactionHistory';

function mapStateToProps(state) {
  return {
    account: state.app.account,
    transactions: state.app.transactions,
  };
}

export default connect(mapStateToProps, null)(TransactionHistory);
