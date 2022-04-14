import { Button, scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const FormInput = styled.input.withConfig({
  shouldForwardProp: (prop) => true,
})`
  padding: ${scaleValue(11)}px ${scaleValue(15)}px ${scaleValue(10)}px;
  font-size: ${scaleValue(14)}px;
  line-height: ${scaleValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border: none;
  border-radius: ${scaleValue(20)}px;

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(11, 'medium')}px ${scaleValue(15, 'medium')}px
      ${scaleValue(10, 'medium')}px;
    font-size: ${scaleValue(14, 'medium')}px;
    line-height: ${scaleValue(14, 'medium')}px;
    border-radius: ${scaleValue(20, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: ${scaleValue(11, 'small')}px ${scaleValue(15, 'small')}px
      ${scaleValue(10, 'small')}px;
    font-size: ${scaleValue(15, 'small')}px;
    line-height: ${scaleValue(15, 'small')}px;
    border-radius: ${scaleValue(20, 'small')}px;
  }

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

  @media ${({ theme }) => theme.media.medium} {
    width: ${scaleValue(350, 'medium')}px;
    padding: ${scaleValue(25, 'medium')}px;
    box-shadow: 0 ${scaleValue(5, 'medium')}px ${scaleValue(10, 'medium')}px
      rgba(21, 21, 27, 0.25);
    border-radius: ${scaleValue(15, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    width: 100%;
    padding: ${scaleValue(20, 'small')}px;
    box-shadow: 0 ${scaleValue(3, 'small')}px ${scaleValue(8, 'small')}px
      ${scaleValue(1, 'small')}px rgba(21, 21, 27, 0.25);
    border-radius: ${scaleValue(15, 'small')}px;
  }

  ${FormInput} {
    width: 100%;
    margin-bottom: ${scaleValue(15)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: ${scaleValue(15, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-bottom: ${scaleValue(15, 'small')}px;
    }
  }

  ${Button} {
    width: 100%;
  }
`;
