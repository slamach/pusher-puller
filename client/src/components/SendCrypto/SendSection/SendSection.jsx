import { VisuallyHidden } from 'components/AppStyles';
import CryptoCard from './CryptoCard/CryptoCardContainer';
import SendForm from './SendForm/SendForm';
import { SendSectionContainer } from './SendSectionStyles';

const SendSection = (props) => {
  return (
    <SendSectionContainer>
      <VisuallyHidden as="h3">Send Form</VisuallyHidden>
      <CryptoCard />
      <SendForm />
    </SendSectionContainer>
  );
};

export default SendSection;
