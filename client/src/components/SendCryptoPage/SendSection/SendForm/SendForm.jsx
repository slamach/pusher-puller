import { Button } from 'components/AppStyles';

const { SendFormContainer, FormInput } = require('./SendFormStyles');

const SendForm = (props) => {
  return (
    <SendFormContainer>
      <form>
        <FormInput type="text" placeholder="Address To" />
        <FormInput type="text" placeholder="Amount (ETH)" />
        <FormInput type="text" placeholder="Giphy Keyword" />
        <FormInput type="text" placeholder="Message" />
        <Button type="submit">Send</Button>
      </form>
    </SendFormContainer>
  );
};

export default SendForm;
