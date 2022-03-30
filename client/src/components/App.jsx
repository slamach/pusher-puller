import { ThemeProvider } from 'styled-components';
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Header from './Header/Header';
import ReactFullpage from '@fullpage/react-fullpage';
import SendCryptoPage from './SendCryptoPage/SendCryptoPage';
import AboutPage from './AboutPage/AboutPage';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ReactFullpage
        navigation
        anchors={['sendcrypto', 'about']}
        sectionSelector=".section"
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <SendCryptoPage className="section">
              <h1>Page 1</h1>
            </SendCryptoPage>
            <AboutPage className="section">
              <h1>Page 2</h1>
            </AboutPage>
          </ReactFullpage.Wrapper>
        )}
      />
    </ThemeProvider>
  );
};

export default App;
