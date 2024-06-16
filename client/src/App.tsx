import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id="app-div">
      <NavBar />
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;