import Logo from 'assets/img/logo.svg';
import { Button } from 'components/AppStyles';
import { NavList, HeaderLogo, StyledNav, StyledHeader } from './HeaderStyles';

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledNav>
        <HeaderLogo href="#sendcrypto">
          <img src={Logo} width="113" height="48" alt="Pusher &amp; Puller" />
        </HeaderLogo>
        <NavList>
          <li>
            <a href="#sendcrypto">Send Crypto</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </NavList>
        <Button type="button">Connect Wallet</Button>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
