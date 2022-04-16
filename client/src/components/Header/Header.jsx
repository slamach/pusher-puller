import { useEffect, useState } from 'react';
import Logo from 'assets/img/logo.svg';
import { Button } from 'components/AppStyles';
import { NavList, HeaderLogo, StyledNav, StyledHeader } from './HeaderStyles';

const Header = (props) => {
  const [headerFixed, setHeaderFixed] = useState(false);
  useEffect(() => {
    const onScroll = (event) => {
      if (window.scrollY) {
        console.log(true);
        setHeaderFixed(true);
      } else {
        console.log(false);
        setHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <StyledHeader fixed={headerFixed}>
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
