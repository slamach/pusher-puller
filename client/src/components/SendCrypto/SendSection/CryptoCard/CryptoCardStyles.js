import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const CryptoCardAddress = styled.p`
  position: absolute;
  top: ${scaleValue(20)}px;
  right: ${scaleValue(20)}px;
  margin: 0;
  font-size: ${scaleValue(10)}px;
  line-height: ${scaleValue(12)}px;
  user-select: none;

  @media ${({ theme }) => theme.media.medium} {
    top: ${scaleValue(20, 'medium')}px;
    right: ${scaleValue(20, 'medium')}px;
    font-size: ${scaleValue(10, 'medium')}px;
    line-height: ${scaleValue(12, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    top: ${scaleValue(20, 'small')}px;
    right: ${scaleValue(20, 'small')}px;
    font-size: ${scaleValue(10, 'small')}px;
    line-height: ${scaleValue(12, 'small')}px;
  }
`;

export const CryptoCardAmount = styled.p`
  position: absolute;
  bottom: ${scaleValue(20)}px;
  left: ${scaleValue(20)}px;
  margin: 0;
  font-size: ${scaleValue(18)}px;
  line-height: ${scaleValue(22)}px;
  user-select: none;

  @media ${({ theme }) => theme.media.medium} {
    bottom: ${scaleValue(20, 'medium')}px;
    left: ${scaleValue(20, 'medium')}px;
    font-size: ${scaleValue(18, 'medium')}px;
    line-height: ${scaleValue(22, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    bottom: ${scaleValue(20, 'small')}px;
    left: ${scaleValue(20, 'small')}px;
    font-size: ${scaleValue(18, 'small')}px;
    line-height: ${scaleValue(22, 'small')}px;
  }

  span {
    margin-left: ${scaleValue(10)}px;
    font-size: ${scaleValue(24)}px;
    line-height: ${scaleValue(29)}px;
    letter-spacing: 0.025em;

    @media ${({ theme }) => theme.media.medium} {
      margin-left: ${scaleValue(10, 'medium')}px;
      font-size: ${scaleValue(24, 'medium')}px;
      line-height: ${scaleValue(29, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-left: ${scaleValue(10, 'small')}px;
      font-size: ${scaleValue(24, 'small')}px;
      line-height: ${scaleValue(29, 'small')}px;
    }
  }
`;

export const CryptoCardContainer = styled.div`
  position: relative;
  width: ${scaleValue(300)}px;
  height: ${scaleValue(185)}px;
  background: radial-gradient(
      34.7% 55.14% at 35% 44.86%,
      rgba(83, 66, 194, 0.5) 0,
      rgba(83, 66, 194, 0) 100%
    ),
    radial-gradient(
      31.88% 49.46% at 48% 74.59%,
      rgba(194, 66, 66, 0.5) 0,
      rgba(194, 66, 66, 0) 100%
    ),
    radial-gradient(
      48.84% 75.68% at 12% 125.95%,
      rgba(208, 74, 143, 0.8) 0,
      rgba(208, 74, 143, 0) 100%
    ),
    radial-gradient(
      73.17% 125.26% at 112.33% 3.78%,
      #5342c2 0,
      rgba(83, 66, 194, 0) 100%
    ),
    radial-gradient(
      57.52% 91.35% at 33.83% -18.11%,
      #4285c2 0,
      rgba(66, 133, 194, 0) 100%
    ),
    radial-gradient(
      44.17% 72.7% at 85.5% 118.38%,
      rgba(66, 133, 194, 0.75) 0,
      rgba(66, 133, 194, 0) 100%
    ),
    ${({ theme }) => theme.colors.pinkHover};
  box-shadow: 0 ${scaleValue(5)}px ${scaleValue(10)}px ${scaleValue(2.5)}px
    rgba(21, 21, 27, 0.25);
  border-radius: ${scaleValue(15)}px;

  @media ${({ theme }) => theme.media.medium} {
    width: ${scaleValue(300, 'medium')}px;
    height: ${scaleValue(185, 'medium')}px;
    box-shadow: 0 ${scaleValue(5, 'medium')}px ${scaleValue(10, 'medium')}px
      ${scaleValue(2.5, 'medium')}px rgba(21, 21, 27, 0.25);
    border-radius: ${scaleValue(15, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    width: ${scaleValue(300, 'small')}px;
    height: ${scaleValue(185, 'small')}px;
    box-shadow: 0 ${scaleValue(3, 'small')}px ${scaleValue(8, 'small')}px
      ${scaleValue(1, 'small')}px rgba(21, 21, 27, 0.25);
    border-radius: ${scaleValue(15, 'small')}px;
  }

  img {
    position: absolute;
    top: ${scaleValue(20)}px;
    left: ${scaleValue(20)}px;
    width: ${scaleValue(32)}px;
    user-select: none;

    @media ${({ theme }) => theme.media.medium} {
      top: ${scaleValue(20, 'medium')}px;
      left: ${scaleValue(20, 'medium')}px;
      width: ${scaleValue(32, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      top: ${scaleValue(20, 'small')}px;
      left: ${scaleValue(20, 'small')}px;
      width: ${scaleValue(32, 'small')}px;
    }
  }
`;
