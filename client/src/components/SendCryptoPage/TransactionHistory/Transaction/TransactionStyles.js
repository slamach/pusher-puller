import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${scaleValue(20)}px;

  img {
    width: 100%;
    height: ${scaleValue(150)}px;
    border-radius: ${scaleValue(20)}px ${scaleValue(20)}px 0 0;
    object-fit: cover;
  }

  p {
    margin: 0;
    padding: ${scaleValue(10)}px;
    font-size: ${scaleValue(14)}px;
    line-height: ${scaleValue(17)}px;
  }
`;
