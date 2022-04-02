import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';
import { CryptoCardContainer } from './CryptoCard/CryptoCardStyles';
import { SendFormContainer } from './SendForm/SendFormStyles';

export const SendSectionContainer = styled.section`
  width: ${scaleValue(350)}px;
  margin-top: ${scaleValue(65)}px;

  ${CryptoCardContainer} {
    margin: 0 auto;
    margin-bottom: ${scaleValue(25)}px;
  }

  ${SendFormContainer} {
    margin: 0 auto;
  }
`;
