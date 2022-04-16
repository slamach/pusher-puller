import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';
import { SendSectionContainer } from './SendSection/SendSectionStyles';

export const SendCryptoContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    justify-content: flex-start;
  }

  ${SendSectionContainer} {
    margin-top: ${scaleValue(67)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-top: 0;
      margin-bottom: ${scaleValue(45, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-bottom: ${scaleValue(40, 'small')}px;
    }
  }
`;

export const SendCryptoSection = styled.section`
  margin-bottom: ${scaleValue(35)}px;

  @media ${({ theme }) => theme.media.medium} {
    margin-bottom: ${scaleValue(50, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    margin-bottom: ${scaleValue(60, 'small')}px;
  }
`;
