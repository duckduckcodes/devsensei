import { MemoryRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Browser from './components/Browser/Browser';
import View from './components/View/View';
import { Provider } from 'react-redux';
import store from './store';
import AddRequest from './components/View/Request/AddRequest';

function Hello() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Browser />
      <View />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/addRequest" element={<AddRequest />} />
      </Routes>
    </HashRouter>
  );
}
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
