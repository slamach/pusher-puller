import { Button, theme, VisuallyHidden } from 'components/AppStyles';
import {
  AboutButtonContainer,
  AboutSection,
  AboutSlogan,
  BNBCoin,
  BTCCoin,
  ETHCoin,
} from './AboutStyles';
import btcCoinLarge from 'assets/img/btc-coin-1280.png';
import btcCoinMedium from 'assets/img/btc-coin-768.png';
import btcCoinSmall from 'assets/img/btc-coin-360.png';
import bnbCoinLarge from 'assets/img/bnb-coin-1280.png';
import bnbCoinMedium from 'assets/img/bnb-coin-768.png';
import bnbCoinSmall from 'assets/img/bnb-coin-360.png';
import ethCoinLarge from 'assets/img/eth-coin-1280.png';
import ethCoinMedium from 'assets/img/eth-coin-768.png';
import ethCoinSmall from 'assets/img/eth-coin-360.png';

const AboutPage = (props) => {
  return (
    <AboutSection id={props.id}>
      <VisuallyHidden as="h2">About</VisuallyHidden>
      <picture>
        <source
          media={`(min-width: ${theme.breakpoints.large}px)`}
          srcSet={btcCoinLarge}
        />
        <source
          media={`(min-width: ${theme.breakpoints.medium}px)`}
          srcSet={btcCoinMedium}
        />
        <BTCCoin src={btcCoinSmall} width="265" height="265" alt="BNB Coin" />
      </picture>
      <picture>
        <source
          media={`(min-width: ${theme.breakpoints.large}px)`}
          srcSet={bnbCoinLarge}
        />
        <source
          media={`(min-width: ${theme.breakpoints.medium}px)`}
          srcSet={bnbCoinMedium}
        />
        <BNBCoin src={bnbCoinSmall} width="291" height="291" alt="BNB Coin" />
      </picture>
      <picture>
        <source
          media={`(min-width: ${theme.breakpoints.large}px)`}
          srcSet={ethCoinLarge}
        />
        <source
          media={`(min-width: ${theme.breakpoints.medium}px)`}
          srcSet={ethCoinMedium}
        />
        <ETHCoin src={ethCoinSmall} width="313" height="322" alt="ETH Coin" />
      </picture>
      <AboutSlogan>
        Send <span>crypto</span> <br />
        across the world
      </AboutSlogan>
      <p>
        Open source project created for the purpose of learning Web 3.0. It uses
        React, ethers.js, Alchemy etc. Project works over Ropsten
        Test Network. It is created completely from scratch only using some
        references. Your can find the source code{' '}
        <a
          href="https://github.com/slamach/pusher-puller"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <AboutButtonContainer>
        <li>
          <Button
            type="button"
            disabled={props.account}
            onClick={() => props.connectWallet()}
          >
            {props.account ? 'Connected' : 'Connect Wallet'}
          </Button>
        </li>
        <li>
          <Button
            bordered
            as="a"
            href="https://dmitrysviridov.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact Author
          </Button>
        </li>
      </AboutButtonContainer>
    </AboutSection>
  );
};

export default AboutPage;
