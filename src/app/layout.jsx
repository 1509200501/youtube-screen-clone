'use client';

import { Provider } from 'react-redux';
import store from './store';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';
function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);

  const customTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      }),
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeWrapper>
            <Header/>
            {children}
          </ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
