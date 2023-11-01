import React from 'react';

import './App.css';

import Router from "./pages/router";
import { BandsProvider } from './store/bandsContext';
import { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <BandsProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BandsProvider>
  );
};

export default App;