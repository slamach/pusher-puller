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
  margin-bottom: ${scaleValue(15)}px;
  padding: ${scaleValue(20)}px ${scaleValue(50)}px;

  @media ${({ theme }) => theme.media.medium} {
    margin-bottom: ${scaleValue(15, 'medium')}px;
    padding: ${scaleValue(15, 'medium')}px ${scaleValue(25, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    margin-bottom: ${scaleValue(15, 'small')}px;
    padding: ${scaleValue(10, 'small')}px ${scaleValue(15, 'small')}px;
  }

  ${HeaderLogo} {
    margin-right: auto;
  }
`;
