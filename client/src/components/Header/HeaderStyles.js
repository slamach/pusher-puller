import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  margin-right: ${scaleValue(40)}px;
  list-style: none;

  @media ${({ theme }) => theme.media.medium} {
    margin-right: ${scaleValue(40, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }

  li {
    margin-right: ${scaleValue(30)}px;

    @media ${({ theme }) => theme.media.medium} {
      margin-right: ${scaleValue(30, 'medium')}px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderLogo = styled.a`
  width: ${scaleValue(113)}px;

  @media ${({ theme }) => theme.media.medium} {
    width: ${scaleValue(100, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    width: ${scaleValue(90, 'small')}px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: ${scaleValue(15)}px ${scaleValue(50)}px;
  transition: background-color 0.2s ease-in-out;
  border-radius: 0 0 ${scaleValue(15)}px ${scaleValue(15)}px;

  ${({ fixed, theme }) => {
    if (fixed) {
      return `
        background-color: ${theme.colors.secondaryBackground};
      `;
    }
  }}

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(10, 'medium')}px ${scaleValue(25, 'medium')}px;
    border-radius: 0 0 ${scaleValue(15, 'medium')}px
      ${scaleValue(15, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: ${scaleValue(10, 'small')}px ${scaleValue(15, 'small')}px;
    border-radius: 0 0 ${scaleValue(15, 'small')}px ${scaleValue(15, 'small')}px;
  }

  ${HeaderLogo} {
    margin-right: auto;
  }
`;
