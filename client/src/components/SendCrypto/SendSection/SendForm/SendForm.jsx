import { Button } from 'components/AppStyles';

import { SendFormContainer, FormInput } from './SendFormStyles';

const SendForm = (props) => {
  const focusNextInput = (evt) => {
    if (evt.which === 13) {
      evt.preventDefault();
      const form = evt.target.form;
      const index = [...form].indexOf(evt.target);
      form.elements[index + 1].focus();
    }
  };

  return (
    <SendFormContainer>
      <form>
        <FormInput
          type="text"
          placeholder="Address To"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
        />
        <FormInput
          type="text"
          placeholder="Amount (ETH)"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
        />
        <FormInput
          type="text"
          placeholder="Giphy Keyword"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
        />
        <FormInput type="text" placeholder="Message" enterKeyHint="send" />
        <Button type="submit">Send</Button>
      </form>
    </SendFormContainer>
  );
};

export default SendForm;
