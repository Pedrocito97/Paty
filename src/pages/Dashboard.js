import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <h1>Bienvenue {user?.email}</h1>
      <nav>
        <Link to="/programs">Programmes</Link> |{' '}
        <Link to="/account">Mon compte</Link> |{' '}
        <Link to="/coach">Coach</Link>
      </nav>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
}

export default Dashboard;
