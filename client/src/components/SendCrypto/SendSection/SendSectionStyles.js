import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';
import { CryptoCardContainer } from './CryptoCard/CryptoCardStyles';
import { SendFormContainer } from './SendForm/SendFormStyles';

export const SendSectionContainer = styled.section`
  width: ${scaleValue(350)}px;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media ${({ theme }) => theme.media.small} {
    flex-direction: column;
    justify-content: flex-start;
  }

  ${CryptoCardContainer} {
    margin: 0 auto;
    margin-bottom: ${scaleValue(25)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin: 0;
      margin-right: ${scaleValue(30, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-right: 0;
      margin-bottom: ${scaleValue(20, 'small')}px;
    }
  }

  ${SendFormContainer} {
    margin: 0 auto;

    @media ${({ theme }) => theme.media.medium} {
      margin: 0;
    }
  }
`;
