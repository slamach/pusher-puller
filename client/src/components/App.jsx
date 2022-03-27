import { ThemeProvider } from 'styled-components';
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Header from './Header/Header';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        
      </Header>
    </ThemeProvider>
  );
};

export default App;
