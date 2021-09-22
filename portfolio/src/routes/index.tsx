import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Navbar from '../components/Navbar';
import usePersistedState from '../utils/usePersistedState';

import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const Routes: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const swtichTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar swtichTheme={swtichTheme} />
          <Route exact path="/" component={Home} />
          <Route exact path="/projetos" component={Projects} />
          <Route exact path="/sobre" component={About} />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default Routes;
