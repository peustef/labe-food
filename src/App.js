import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React from 'react';
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
