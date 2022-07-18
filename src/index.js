import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './Router';

import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

window.Kakao.init(process.env.REACT_APP_KAKAO);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
