import { scaleValue } from 'components/AppStyles';
import styled, { keyframes } from 'styled-components';

const BTCAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BNBAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ETHAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BTCCoin = styled.img`
  position: absolute;
  top: ${scaleValue(376)}px;
  left: ${scaleValue(111)}px;
  z-index: -1;
  width: ${scaleValue(265)}px;
  animation-name: ${BTCAnimation};
  animation-timing-function: ease-in-out;
  animation-duration: 4.5s;
  animation-delay: 1s;
  animation-iteration-count: infinite;

  @media ${({ theme }) => theme.media.medium} {
    top: ${scaleValue(476, 'medium')}px;
    left: ${scaleValue(300, 'medium')}px;
    width: ${scaleValue(265, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    top: ${scaleValue(508, 'small')}px;
    left: ${scaleValue(94, 'small')}px;
    width: ${scaleValue(228, 'small')}px;
  }
`;

export const BNBCoin = styled.img`
  position: absolute;
  top: ${scaleValue(230)}px;
  left: ${scaleValue(20)}px;
  z-index: -1;
  width: ${scaleValue(291)}px;
  animation-name: ${BNBAnimation};
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @media ${({ theme }) => theme.media.medium} {
    top: ${scaleValue(359, 'medium')}px;
    left: ${scaleValue(440, 'medium')}px;
    width: ${scaleValue(291, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    top: ${scaleValue(347, 'small')}px;
    left: ${scaleValue(118, 'small')}px;
    width: ${scaleValue(262, 'small')}px;
  }
`;

export const ETHCoin = styled.img`
  position: absolute;
  top: ${scaleValue(108)}px;
  left: ${scaleValue(158)}px;
  z-index: -1;
  width: ${scaleValue(313)}px;
  animation-name: ${ETHAnimation};
  animation-timing-function: linear;
  animation-duration: 5.5s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;

  @media ${({ theme }) => theme.media.medium} {
    top: ${scaleValue(415, 'medium')}px;
    left: ${scaleValue(102, 'medium')}px;
    width: ${scaleValue(313, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    top: ${scaleValue(291, 'small')}px;
    left: -${scaleValue(59, 'small')}px;
    width: ${scaleValue(288, 'small')}px;
  }
`;

export const AboutButtonContainer = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-right: ${scaleValue(20)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-right: ${scaleValue(20, 'medium')}px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const AboutSlogan = styled.p`
  font-family: ${({ theme }) => theme.fonts.kanit};
  font-weight: 600;
  font-size: ${scaleValue(48)}px;
  line-height: ${scaleValue(48)}px;
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.media.medium} {
    font-size: ${scaleValue(48, 'medium')}px;
    line-height: ${scaleValue(48, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    font-size: ${scaleValue(40, 'small')}px;
    line-height: ${scaleValue(40, 'small')}px;
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
  }

  br {
    display: none;

    @media ${({ theme }) => theme.media.medium} {
      display: inline;
    }
  }
`;

export const AboutSection = styled.section`
  position: relative;
  padding: ${scaleValue(150)}px 0 ${scaleValue(250)}px ${scaleValue(520)}px;

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(70, 'medium')}px ${scaleValue(214, 'medium')}px
      ${scaleValue(390, 'medium')}px 0;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 0 0 ${scaleValue(340, 'small')}px;
  }

  ${AboutSlogan} {
    margin-bottom: ${scaleValue(30)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: ${scaleValue(20, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-bottom: ${scaleValue(20, 'small')}px;
    }
  }

  p {
    margin-bottom: ${scaleValue(30)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: ${scaleValue(20, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      margin-bottom: ${scaleValue(20, 'small')}px;
    }

    a {
      text-decoration: underline;

      @media ${({ theme }) => theme.media.largeOnly} {
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;
