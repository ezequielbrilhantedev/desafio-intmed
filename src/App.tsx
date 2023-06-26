// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './context/index';

function App() {
  return (
    <UserContextProvider>
      <div id="App" className="container">
        <Outlet />
      </div>
    </UserContextProvider>
  );
}

export default App;
