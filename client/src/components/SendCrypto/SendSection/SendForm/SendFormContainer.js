import { connect } from 'react-redux';
import { addTransaction } from 'state/modules/app';
import SendForm from './SendForm';

function mapDispatchToProps(dispatch) {
  return {
    addTransaction: (value, reciever, message, keyword) =>
      dispatch(addTransaction(value, reciever, message, keyword)),
  };
}

export default connect(null, mapDispatchToProps)(SendForm);
