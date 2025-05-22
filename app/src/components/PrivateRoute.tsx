import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
