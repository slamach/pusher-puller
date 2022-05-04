import { ThemeProvider } from 'styled-components';
import { MainContainer, theme, VisuallyHidden } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Header from './Header/HeaderContainer';
import SendCrypto from './SendCrypto/SendCrypto';
import About from './About/AboutContainer';
import Notification from './Notification/Notification';
import { useEffect } from 'react';

const App = (props) => {
  useEffect(() => {
    props.initializeConnection();
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <VisuallyHidden as="h1">Pusher &amp; Puller</VisuallyHidden>
        <SendCrypto id="sendcrypto" />
        <About id="about" />
        <Notification isVisible={props.notificationStatus}>{props.notification}</Notification>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
