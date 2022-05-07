import { VisuallyHidden } from 'components/AppStyles';
import { SendCryptoContainer, SendCryptoSection } from './SendCryptoStyles';
import SendSection from './SendSection/SendSection';
import TransactionHistory from './TransactionHistory/TransactionHistoryContainer';

const SendCryptoPage = (props) => {
  return (
    <SendCryptoSection id={props.id}>
      <VisuallyHidden as="h2">Send Crypto</VisuallyHidden>
      <SendCryptoContainer>
        <SendSection />
        <TransactionHistory />
      </SendCryptoContainer>
    </SendCryptoSection>
  );
};

export default SendCryptoPage;
