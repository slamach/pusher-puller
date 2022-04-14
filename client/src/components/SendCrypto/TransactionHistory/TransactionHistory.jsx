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
      <TransactionsList>
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
        <Transaction as="li" />
      </TransactionsList>
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
