import {
  CryptoCardAddress,
  CryptoCardAmount,
  CryptoCardContainer,
} from './CryptoCardStyles';
import EthereumIcon from 'assets/img/icon-eth.svg';
import { ethers } from 'ethers';

const CryptoCard = (props) => {
  return (
    <CryptoCardContainer>
      <img src={EthereumIcon} alt="Ethereum" />
      <CryptoCardAmount>
        {props.balance ? ethers.utils.formatEther(props.balance).slice(0, 9) : '***'}
        <span>ETH</span>
      </CryptoCardAmount>
      <CryptoCardAddress>
        {props.account
          ? props.account.slice(0, 5) + '...' + props.account.slice(-4)
          : '0x***...****'}
      </CryptoCardAddress>
    </CryptoCardContainer>
  );
};

export default CryptoCard;
