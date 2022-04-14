import styled, { createGlobalStyle } from 'styled-components';
import InterMedium from 'assets/fonts/Inter-Medium.woff2';
import KanitSemiBold from 'assets/fonts/Kanit-SemiBold.woff2';

export const scaleValue = (value, idealViewportWidthType = 'large') => {
  let idealViewportWidth;
  switch (idealViewportWidthType) {
    case 'medium':
      idealViewportWidth = theme.breakpoints.medium + 140;
      break;
    case 'small':
      idealViewportWidth = theme.breakpoints.small;
      break;
    default:
    case 'large':
      idealViewportWidth = theme.breakpoints.large + 140;
  }
  return value * (window.innerWidth / idealViewportWidth);
};

const breakpoints = {
  large: 1280,
  supermedium: 1030,
  medium: 768,
  small: 360,
};

export const theme = {
  breakpoints,
  media: {
    largeOnly: `screen and (min-width: ${breakpoints.large}px)`,
    medium: `screen and (max-width: ${breakpoints.supermedium - 1}px)`,
    small: `screen and (max-width: ${breakpoints.medium - 1}px)`,
  },
  fonts: {
    inter: 'Inter, sans-serif',
    kanit: 'Kanit, sans-serif',
  },
  colors: {
    mainBackground: '#15151b',
    secondaryBackground: '#262632',
    text: '#f5f4fa',
    pink: '#ca478a',
    pinkHover: '#b33f7e',
    purple: '#6151ca',
  },
  misc: {},
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url('${InterMedium}') format('woff2');
  }

  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 600;
    font-display: block;
    src: url('${KanitSemiBold}') format('woff2');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    min-width: ${theme.breakpoints.small}px;
    min-height: 100%;
    margin: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: ${theme.fonts.inter};
    font-size: ${scaleValue(16)}px;
    line-height: ${scaleValue(20)}px;
    font-weight: 500;
    color: ${theme.colors.text};
    background-color: ${theme.colors.mainBackground};

    @media ${({ theme }) => theme.media.medium} {
      font-size: ${scaleValue(16, 'medium')}px;
      line-height: ${scaleValue(20, 'medium')}px;
    }

    @media ${({ theme }) => theme.media.small} {
      font-size: ${scaleValue(14, 'small')}px;
      line-height: ${scaleValue(17, 'small')}px;
    }
  }

  #root {
    height: 100%;
    overflow-x: hidden;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .section {
    * {
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }

    &.active {
      * {
        opacity: 1;
      }
    }
  }
`;

export const VisuallyHidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const SectionTitle = styled.p`
  margin: 0;
  font-family: ${theme.fonts.kanit};
  font-weight: 600;
  font-size: ${scaleValue(42)}px;
  line-height: ${scaleValue(42)}px;

  @media ${({ theme }) => theme.media.medium} {
    font-size: ${scaleValue(42, 'medium')}px;
    line-height: ${scaleValue(42, 'medium')}px;
  }
`;

export const Button = styled.button`
  padding: ${scaleValue(8)}px ${scaleValue(20)}px ${scaleValue(10)}px;
  font-family: ${theme.fonts.kanit};
  font-size: ${scaleValue(16)}px;
  line-height: ${scaleValue(16)}px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${theme.colors.pink};
  border: none;
  border-radius: ${scaleValue(20)}px;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  @media ${theme.media.largeOnly} {
    &:hover {
      color: #eeeeee;
      background-color: ${theme.colors.pinkHover};
    }
  }

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(8, 'medium')}px ${scaleValue(20, 'medium')}px
      ${scaleValue(10, 'medium')}px;
    font-size: ${scaleValue(16, 'medium')}px;
    line-height: ${scaleValue(16, 'medium')}px;
    border-radius: ${scaleValue(20, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: ${scaleValue(9, 'small')}px ${scaleValue(15, 'small')}px;
    font-size: ${scaleValue(14, 'small')}px;
    line-height: ${scaleValue(14, 'small')}px;
    border-radius: ${scaleValue(16, 'small')}px;
  }
`;
