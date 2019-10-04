import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Dashboard ingresos={1000} gastos={500} />
  );
}

export default App;
