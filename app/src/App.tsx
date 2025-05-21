import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import HealthQuestionnaire from './pages/HealthQuestionnaire';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<HealthQuestionnaire />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
