import styled, { createGlobalStyle } from 'styled-components';
import InterMedium from 'assets/fonts/Inter-Medium.woff2';

const breakpoints = {
  large: 1280,
  medium: 768,
  small: 360,
};

export const theme = {
  breakpoints,
  media: {
    largeOnly: `screen and (min-width: ${breakpoints.large}px)`,
    medium: `screen and (max-width: ${breakpoints.large - 1}px)`,
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
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: ${theme.colors.text};
    background-color: ${theme.colors.mainBackground};
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

export const Button = styled.button`
  padding: 10px 20px 12px;
  font-family: ${theme.fonts.kanit};
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${theme.colors.pink};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  @media ${theme.media.largeOnly} {
    &:hover {
      color: #eeeeee;
      background-color: ${theme.colors.pinkHover};
    }
  }

  @media ${theme.media.small} {
    padding: 9px 15px 10px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 16px;
  }
`;
