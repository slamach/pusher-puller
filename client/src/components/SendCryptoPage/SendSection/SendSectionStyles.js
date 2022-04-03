import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';
import { CryptoCardContainer } from './CryptoCard/CryptoCardStyles';
import { SendFormContainer } from './SendForm/SendFormStyles';

export const SendSectionContainer = styled.section`
  width: ${scaleValue(350)}px;
  margin-top: ${scaleValue(65)}px;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: ${scaleValue(30, 'medium')}px;
  }

  ${CryptoCardContainer} {
    margin: 0 auto;
    margin-bottom: ${scaleValue(25)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin: 0;
      margin-right: ${scaleValue(30, 'medium')}px;
    }
  }

  ${SendFormContainer} {
    margin: 0 auto;

    @media ${({ theme }) => theme.media.medium} {
      margin: 0;
    }
  }
`;
