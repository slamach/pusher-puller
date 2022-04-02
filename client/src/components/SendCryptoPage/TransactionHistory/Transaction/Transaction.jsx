import { TransactionContainer } from './TransactionStyles';
import GiphyExample from 'assets/img/giphy-example.jpg';

const Transaction = (props) => {
  return (
    <TransactionContainer>
      <img src={GiphyExample} alt="Giphy Example" />
      <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lo...</p>
    </TransactionContainer>
  );
};

export default Transaction;
