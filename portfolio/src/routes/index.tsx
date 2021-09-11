import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/projetos" component={Projects} />
      <Route path="/sobre" component={About} />
    </BrowserRouter>
  );
};

export default Routes;
