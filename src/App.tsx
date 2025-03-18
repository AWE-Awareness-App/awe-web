import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import ServicesPage from './pages/Services.tsx';
import AccountDeletionPage from './pages/AccountDeletion.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/account-deletion' element={<AccountDeletionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
