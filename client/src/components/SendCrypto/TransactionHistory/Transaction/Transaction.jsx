import { TransactionContainer } from './TransactionStyles';
import GiphyExample from 'assets/img/giphy-example.jpg';

const Transaction = (props) => {
  return (
    <TransactionContainer as={props.as}>
      <div>{/* <img src={GiphyExample} alt="Giphy Example" /> */}</div>
      <p>
        {props.content?.length >= 70
          ? props.content.slice(0, 67) + '...'
          : props.content}
      </p>
    </TransactionContainer>
  );
};

export default Transaction;
