import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Browser from './components/Browser/Browser';
import View from './components/View/View';

function Hello() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Browser />
      <View />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}