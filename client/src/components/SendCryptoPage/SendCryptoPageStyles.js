import { scaleValue } from 'components/AppStyles';
import styled from 'styled-components';

export const SendCryptoContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${scaleValue(50)}px;
`;

export const SendCryptoSection = styled.section`
  background: radial-gradient(
      62.11% 62.11% at 100% 0%,
      rgba(208, 74, 143, 0.5) 0%,
      rgba(208, 74, 143, 0) 100%
    ),
    radial-gradient(
      50% 50% at 50% 0%,
      rgba(83, 66, 194, 0.5) 0%,
      rgba(83, 66, 194, 0) 100%
    ),
    ${({ theme }) => theme.colors.mainBackground};

  @media ${({ theme }) => theme.media.small} {
    background: radial-gradient(
        50% 50% at 100% 0%,
        rgba(208, 74, 143, 0.5) 0%,
        rgba(208, 74, 143, 0) 100%
      ),
      radial-gradient(
        50% 50% at 50% 0%,
        rgba(83, 66, 194, 0.5) 0%,
        rgba(83, 66, 194, 0) 100%
      ),
      ${({ theme }) => theme.colors.mainBackground};
  }
`;
