import React from 'react';
import { ThemeProvider } from 'react-jss';
// HOCs
import { useSelector } from 'react-redux';
// Styles (hooks)
import themes from '../styles/themes';
// Components
import App from './App';

const Wrapper = () => {
  const isLightTheme = useSelector((state) => state.app.lightTheme);
  const currentTheme = isLightTheme ? 'light' : 'dark';

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <App />
    </ThemeProvider>
  );
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
