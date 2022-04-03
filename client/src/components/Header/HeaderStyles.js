import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  margin-right: ${scaleValue(40)}px;
  list-style: none;

  @media ${({ theme }) => theme.media.medium} {
    margin-right: ${scaleValue(40, 'medium')}px;
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
  padding: ${scaleValue(20)}px ${scaleValue(50)}px;

  @media ${({ theme }) => theme.media.medium} {
    padding: ${scaleValue(15, 'medium')}px ${scaleValue(25, 'medium')}px;
  }

  ${HeaderLogo} {
    margin-right: auto;
  }
`;
