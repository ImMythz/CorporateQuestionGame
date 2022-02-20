import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

