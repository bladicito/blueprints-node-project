import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './views/IndexPage';
import SecondPage from './views/SecondPage';
import NotFoundPage from './views/NotFoundPage';

function App() {
  return (
    <div className="your-app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
