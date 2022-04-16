import styled, { createGlobalStyle } from 'styled-components';
import InterMedium from 'assets/fonts/Inter-Medium.woff2';
import KanitSemiBold from 'assets/fonts/Kanit-SemiBold.woff2';

export const scaleValue = (value, idealViewportWidthType = 'large') => {
  let idealViewportWidth;
  switch (idealViewportWidthType) {
    case 'medium':
      idealViewportWidth = theme.breakpoints.medium;
      break;
    case 'small':
      idealViewportWidth = theme.breakpoints.small;
      break;
    default:
    case 'large':
      idealViewportWidth = theme.breakpoints.large;
  }
  return value * (window.innerWidth / idealViewportWidth);
};

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
    min-height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    min-width: ${theme.breakpoints.small}px;
    min-height: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: ${theme.fonts.inter};
    font-size: ${scaleValue(18)}px;
    line-height: ${scaleValue(22.5)}px;
    font-weight: 500;
    color: ${theme.colors.text};
    background:
      radial-gradient(
        60% ${scaleValue(432)}px at right top,
        rgba(208, 74, 143, 0.5) 0%,
        rgba(208, 74, 143, 0) 100%
      ),
      radial-gradient(
        50% ${scaleValue(360)}px at 50% top,
        rgba(83, 66, 194, 0.5) 0%,
        rgba(83, 66, 194, 0) 100%
      ),
      radial-gradient(
        50% ${scaleValue(435)}px at 50% bottom,
        rgba(83, 66, 194, 0.5) 0,
        rgba(83, 66, 194, 0) 100%
      ),
      radial-gradient(
        50% ${scaleValue(350)}px at right bottom,
        rgba(208, 74, 143, 0.5) 0,
        rgba(208, 74, 143, 0) 100%
      ),
      ${theme.colors.mainBackground};
    background-repeat: no-repeat;

    @media ${({ theme }) => theme.media.medium} {
      font-size: ${scaleValue(18, 'medium')}px;
      line-height: ${scaleValue(22.5, 'medium')}px;
      background:
        radial-gradient(
          60% ${scaleValue(614, 'medium')}px at 100% 0,
          rgba(208, 74, 143, 0.5) 0%,
          rgba(208, 74, 143, 0) 100%
        ),
        radial-gradient(
          50% ${scaleValue(512, 'medium')}px at 50% 0,
          rgba(83, 66, 194, 0.5) 0%,
          rgba(83, 66, 194, 0) 100%
        ),
        radial-gradient(
          50% ${scaleValue(614, 'medium')}px at 50% 100%,
          rgba(83, 66, 194, 0.5) 0,
          rgba(83, 66, 194, 0) 100%
        ),
        radial-gradient(
          50% ${scaleValue(512, 'medium')}px at 100% 100%,
          rgba(208, 74, 143, 0.5) 0,
          rgba(208, 74, 143, 0) 100%
        ),
        ${({ theme }) => theme.colors.mainBackground};
      background-repeat: no-repeat;
    }

    @media ${({ theme }) => theme.media.small} {
      font-size: ${scaleValue(14, 'small')}px;
      line-height: ${scaleValue(17, 'small')}px;
      background:
        radial-gradient(
          55% ${scaleValue(413, 'small')}px at 100% 0,
          rgba(208, 74, 143, 0.5) 0%,
          rgba(208, 74, 143, 0) 100%
        ),
        radial-gradient(
          80% ${scaleValue(413, 'small')}px at 50% 0,
          rgba(83, 66, 194, 0.5) 0%,
          rgba(83, 66, 194, 0) 100%
        ),
        radial-gradient(
          58% ${scaleValue(305, 'small')}px at 50% 100%,
          rgba(83, 66, 194, 0.5) 0,
          rgba(83, 66, 194, 0) 100%
        ),
        radial-gradient(
          84% ${scaleValue(360, 'small')}px at 100% 100%,
          rgba(208, 74, 143, 0.5) 0,
          rgba(208, 74, 143, 0) 100%
        ),
        ${({ theme }) => theme.colors.mainBackground};
      background-repeat: no-repeat;
    }
  }

  #root {
    min-height: 100%;
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

  @media ${({ theme }) => theme.media.small} {
    font-size: ${scaleValue(30, 'small')}px;
    line-height: ${scaleValue(30, 'small')}px;
  }
`;

export const Button = styled.button`
  display: block;
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

  ${({ bordered }) => {
    if (bordered) {
      return `
        padding: ${scaleValue(5)}px ${scaleValue(17)}px ${scaleValue(7)}px;
        background-color: transparent;
        border: ${scaleValue(3)}px solid ${theme.colors.pink};
        @media ${theme.media.largeOnly} {
          &:hover {
            color: #ffffff;
            background-color: ${theme.colors.pink};
          }
        }
      `;
    }
  }}

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(8, 'medium')}px ${scaleValue(20, 'medium')}px
      ${scaleValue(10, 'medium')}px;
    font-size: ${scaleValue(16, 'medium')}px;
    line-height: ${scaleValue(16, 'medium')}px;
    border-radius: ${scaleValue(20, 'medium')}px;

    ${({ bordered }) => {
      if (bordered) {
        return `
          padding: ${scaleValue(5, 'medium')}px ${scaleValue(17, 'medium')}px
            ${scaleValue(7, 'medium')}px;
          border: ${scaleValue(3, 'medium')}px solid ${theme.colors.pink};
        `;
      }
    }}
  }

  @media ${({ theme }) => theme.media.small} {
    padding: ${scaleValue(9, 'small')}px ${scaleValue(15, 'small')}px;
    font-size: ${scaleValue(14, 'small')}px;
    line-height: ${scaleValue(14, 'small')}px;
    border-radius: ${scaleValue(16, 'small')}px;

    ${({ bordered }) => {
      if (bordered) {
        return `
          padding: ${scaleValue(7.5, 'small')}px ${scaleValue(13.5, 'small')}px;
          border: ${scaleValue(3, 'small')}px solid ${theme.colors.pink};
        `;
      }
    }}
  }
`;

export const MainContainer = styled.main`
  padding: 0 ${scaleValue(50)}px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.medium} {
    padding: 0 ${scaleValue(25, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 0 ${scaleValue(15, 'small')}px;
  }
`;
