import { Button } from 'components/AppStyles';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import { SendFormContainer, FormInput, ErrorMessage } from './SendFormStyles';

const SendForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    props.addTransaction(data.value, data.reciever, data.message, data.keyword);
  };

  let errorMessage;
  if (errors.reciever?.type === 'required') {
    errorMessage = 'Please enter reciever addresss.';
  } else if (errors.reciever?.type === 'validate') {
    errorMessage = 'Invalid reciever address.';
  } else if (errors.value) {
    errorMessage = 'Please enter amount of ETH to send.';
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          placeholder="Address To"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
          {...register('reciever', {
            required: true,
            validate: (value) => ethers.utils.isAddress(value),
          })}
        />
        <FormInput
          type="text"
          placeholder="Amount (ETH)"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
          {...register('value', { required: true })}
        />
        <FormInput
          type="text"
          placeholder="Giphy Keyword"
          onKeyDown={focusNextInput}
          enterKeyHint="next"
          {...register('keyword')}
        />
        <FormInput
          type="text"
          placeholder="Message"
          enterKeyHint="send"
          {...register('message')}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Send</Button>
      </form>
    </SendFormContainer>
  );
};

export default SendForm;
