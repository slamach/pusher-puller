import { ThemeProvider } from 'styled-components';
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Pusher &amp; Puller</h1>
    </ThemeProvider>
  );
};

export default App;
