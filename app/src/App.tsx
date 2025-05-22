import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import NavBar from './components/NavBar';
import HealthQuestionnaire from './pages/HealthQuestionnaire';
import LoginPage from './pages/LoginPage';
import TwoFAPage from './pages/TwoFAPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/2fa" element={<TwoFAPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/questionnaire" element={<HealthQuestionnaire />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
