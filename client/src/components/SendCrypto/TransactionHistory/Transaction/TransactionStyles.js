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

  div,
  img {
    width: 100%;
    height: ${scaleValue(150)}px;
    border-radius: ${scaleValue(20)}px ${scaleValue(20)}px 0 0;

    @media ${({ theme }) => theme.media.medium} {
      height: ${scaleValue(150, 'medium')}px;
      border-radius: ${scaleValue(20, 'medium')}px ${scaleValue(20, 'medium')}px
        0 0;
    }

    @media ${({ theme }) => theme.media.small} {
      height: ${scaleValue(275, 'small')}px;
      border-radius: ${scaleValue(20, 'medium')}px ${scaleValue(20, 'medium')}px
        0 0;
    }
  }

  div {
    background-color: ${({theme}) => theme.colors.imgBackground};
  }

  img {
    object-fit: cover;
  }

  p {
    display: flex;
    align-items: center;
    overflow-wrap: anywhere;
    min-height: ${scaleValue(80)}px;
    margin: 0;
    padding: ${scaleValue(10)}px;
    font-size: ${scaleValue(12)}px;
    line-height: ${scaleValue(15)}px;

    @media ${({ theme }) => theme.media.medium} {
      padding: ${scaleValue(10, 'medium')}px;
      font-size: ${scaleValue(12, 'medium')}px;
      line-height: ${scaleValue(15, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      padding: ${scaleValue(10, 'small')}px;
      font-size: ${scaleValue(12, 'small')}px;
      line-height: ${scaleValue(15, 'small')}px;
    }
  }
`;
