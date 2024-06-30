import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import store from './store';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar /><br />
        <CategoryFilter />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
