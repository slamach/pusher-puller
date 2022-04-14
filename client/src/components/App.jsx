import { ThemeProvider } from 'styled-components';
import { MainContainer, theme, VisuallyHidden } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Header from './Header/Header';
import SendCrypto from './SendCrypto/SendCrypto';
import About from './About/About';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <VisuallyHidden as="h1">Pusher &amp; Puller</VisuallyHidden>
        <SendCrypto id="sendcrypto" />
        <About id="about" />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
