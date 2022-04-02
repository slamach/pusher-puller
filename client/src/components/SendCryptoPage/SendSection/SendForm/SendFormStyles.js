import { Button, scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const FormInput = styled.input`
  padding: ${scaleValue(11)}px ${scaleValue(15)}px ${scaleValue(10)}px;
  font-size: ${scaleValue(14)}px;
  line-height: ${scaleValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border: none;
  border-radius: ${scaleValue(20)}px;

  &::placeholder {
    color: inherit;
    user-select: none;
  }
`;

export const SendFormContainer = styled.div`
  width: ${scaleValue(350)}px;
  padding: ${scaleValue(25)}px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0 ${scaleValue(5)}px ${scaleValue(10)}px rgba(21, 21, 27, 0.25);
  border-radius: ${scaleValue(15)}px;

  ${FormInput} {
    width: 100%;
    margin-bottom: ${scaleValue(15)}px;
  }

  ${Button} {
    width: 100%;
  }
`;
