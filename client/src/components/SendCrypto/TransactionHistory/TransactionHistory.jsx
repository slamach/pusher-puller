import { SectionTitle } from 'components/AppStyles';
import Transaction from './Transaction/Transaction';
import {
  TransactionHistoryContainer,
  TransactionsList,
} from './TransactionHistoryStyles';

const TransactionHistory = (props) => {
  return (
    <TransactionHistoryContainer>
      <SectionTitle as="h3">Transaction History</SectionTitle>
      {props.transactions ? (
        <TransactionsList>
          {props.transactions?.map((item, index) => (
            <Transaction
              as="li"
              key={index}
              content={item.message}
              keyword={item.keyword}
            />
          ))}
        </TransactionsList>
      ) : (
        <p>There are no transactions yet.</p>
      )}
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
