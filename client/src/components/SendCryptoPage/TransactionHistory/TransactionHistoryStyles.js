import { scaleValue, SectionTitle } from 'components/AppStyles';
import styled from 'styled-components';

export const TransactionsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${scaleValue(20)}px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TransactionHistoryContainer = styled.section`
  width: ${scaleValue(850)}px;

  ${SectionTitle} {
    margin-bottom: ${scaleValue(20)}px;
  }
`;
