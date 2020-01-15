import React from 'react';
import { Auth } from './pages/auth/Auth';
import { Route } from 'react-router-dom';
import { Home } from './pages/home/Home';

const App = () => {
  return (
    <div className="wrapper">
      <Route component={Auth} path={['/', '/login']} exact />
      <Route component={Home} path={'/im'} />
    </div>
  );
};

export default App;
