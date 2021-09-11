import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/projetos" component={Projects} />
    </BrowserRouter>
  );
};

export default Routes;
