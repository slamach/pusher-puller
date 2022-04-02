import { VisuallyHidden } from 'components/AppStyles';
import { SendCryptoContainer, SendCryptoSection } from './SendCryptoPageStyles';
import SendSection from './SendSection/SendSection';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const SendCryptoPage = (props) => {
  return (
    <SendCryptoSection className={props.className}>
      <VisuallyHidden as="h2">Send Crypto</VisuallyHidden>
      <SendCryptoContainer>
        <SendSection />
        <TransactionHistory />
      </SendCryptoContainer>
    </SendCryptoSection>
  );
};

export default SendCryptoPage;
