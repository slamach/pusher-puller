import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  margin-right: 40px;
  list-style: none;

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }

  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderLogo = styled.a`
  @media ${({ theme }) => theme.media.small} {
    width: 90px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  padding: 25px 50px;

  ${HeaderLogo} {
    margin-right: auto;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 15px;
  }
`;
