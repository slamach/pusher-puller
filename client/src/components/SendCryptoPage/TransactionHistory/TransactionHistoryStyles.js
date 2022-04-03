import { scaleValue, SectionTitle } from 'components/AppStyles';
import styled from 'styled-components';

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
`;

export const TransactionHistoryContainer = styled.section`
  width: ${scaleValue(850)}px;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }

  ${SectionTitle} {
    margin-bottom: ${scaleValue(20)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: ${scaleValue(15, 'medium')}px;
    }
  }
`;
