import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar: React.FC = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">iPaty</Link>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/subscribe">Souscription</Link></li>
          <li><Link to="/dashboard">Tableau de bord</Link></li>
          <li><Link to="/questionnaire">Questionnaire</Link></li>
          {auth && auth.isAuthenticated ? (
            <li><button onClick={handleLogout} className="btn" style={{ padding: '0.25rem 0.5rem' }}>Déconnexion</button></li>
          ) : (
            <li><Link to="/login">Se connecter</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

