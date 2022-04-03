import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${scaleValue(20)}px;

  @media ${({ theme }) => theme.media.medium} {
    border-radius: ${scaleValue(20, 'medium')}px;
  }

  img {
    width: 100%;
    height: ${scaleValue(150)}px;
    border-radius: ${scaleValue(20)}px ${scaleValue(20)}px 0 0;
    object-fit: cover;

    @media ${({ theme }) => theme.media.medium} {
      height: ${scaleValue(150, 'medium')}px;
      border-radius: ${scaleValue(20, 'medium')}px ${scaleValue(20, 'medium')}px
        0 0;
    }
  }

  p {
    margin: 0;
    padding: ${scaleValue(10)}px;
    font-size: ${scaleValue(12)}px;
    line-height: ${scaleValue(15)}px;

    @media ${({ theme }) => theme.media.medium} {
      padding: ${scaleValue(10, 'medium')}px;
      font-size: ${scaleValue(12, 'medium')}px;
      line-height: ${scaleValue(15, 'medium')}px;
    }
  }
`;
