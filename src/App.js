import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
 
import Layout from './layouts/Layouts';

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
