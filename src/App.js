import React from 'react';
import { Navbar, GameList, GameForm } from './components';
import { NavbarContextProvider, GameContextProvider } from './contexts';

import './index.css';

function App() {
  return (
    <div className="App">
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <GameContextProvider>
        <GameList></GameList>
        <GameForm></GameForm>
      </GameContextProvider>
    </div>
  );
}

export default App;
