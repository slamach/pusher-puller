import { scaleValue, SectionTitle } from 'components/AppStyles';
import styled from 'styled-components';
import { TransactionContainer } from './Transaction/TransactionStyles';

export const TransactionsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${scaleValue(20)}px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media ${({ theme }) => theme.media.medium} {
    gap: ${scaleValue(20, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: 1fr;
    gap: ${scaleValue(20, 'small')}px;
  }

  ${TransactionContainer} {
    @media ${({ theme }) => theme.media.small} {
      &:nth-last-child(-n + 4) {
        display: none;
      }
    }
  }
`;

export const TransactionHistoryContainer = styled.section`
  width: ${scaleValue(660)}px;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }

  ${SectionTitle} {
    margin-bottom: ${scaleValue(25)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: ${scaleValue(15, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-bottom: ${scaleValue(15, 'small')}px;
    }
  }
`;