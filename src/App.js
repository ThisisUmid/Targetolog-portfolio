import React from 'react';
import { Header } from './components/head/Header';
import FloatingMenu from './components/FloatingMenu';

const App = () => {
  return (
    <div >
      <FloatingMenu />
      <Header />
    </div>
  );
};

export default App;