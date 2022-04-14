import {
  CryptoCardAddress,
  CryptoCardAmount,
  CryptoCardContainer,
} from './CryptoCardStyles';
import EthereumIcon from 'assets/img/icon-eth.svg';

const CryptoCard = (props) => {
  return (
    <CryptoCardContainer>
      <img src={EthereumIcon} alt="Ethereum" />
      <CryptoCardAmount>
        ***
        <span>ETH</span>
      </CryptoCardAmount>
      <CryptoCardAddress>0x****...****</CryptoCardAddress>
    </CryptoCardContainer>
  );
};

export default CryptoCard;
