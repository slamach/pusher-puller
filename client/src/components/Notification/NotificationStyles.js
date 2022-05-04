import styled from 'styled-components';
import { scaleValue } from 'components/AppStyles';

export const NotificationContainer = styled.aside`
  position: fixed;
  left: 50%;
  bottom: ${scaleValue(25)}px;
  transform: translate(-50%, 200%);
  z-index: 15;
  max-width: 50%;
  padding: ${scaleValue(20)}px ${scaleValue(25)}px;
  font-size: ${scaleValue(14)}px;
  line-height: ${scaleValue(17)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${scaleValue(15)}px;
  transition: transform 0.5s ease-in-out;

  ${({ isVisible }) => {
    if (isVisible) {
      return `
        transform: translate(-50%, 0);
      `;
    }
  }}

  @media ${({ theme }) => theme.media.medium} {
    max-width: 75%;
    bottom: ${scaleValue(25, 'medium')}px;
    padding: ${scaleValue(20, 'medium')}px ${scaleValue(25, 'medium')}px;
    font-size: ${scaleValue(14, 'medium')}px;
    line-height: ${scaleValue(17, 'medium')}px;
    border-radius: ${scaleValue(15, 'medium')}px;
  }

  @media ${({ theme }) => theme.media.small} {
    left: ${scaleValue(20, 'small')}px;
    right: ${scaleValue(20, 'small')}px;
    bottom: ${scaleValue(15, 'small')}px;
    transform: translate(0, 200%);
    max-width: unset;
    padding: ${scaleValue(15, 'small')}px;
    font-size: ${scaleValue(14, 'small')}px;
    line-height: ${scaleValue(17, 'small')}px;
    border-radius: ${scaleValue(15, 'small')}px;

    ${({ isVisible }) => {
    if (isVisible) {
      return `
        transform: translate(0);
      `;
    }
  }}
  }
`;
