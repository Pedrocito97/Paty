import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-brand">iPaty</Link>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/subscribe">Souscription</Link></li>
        <li><Link to="/dashboard">Tableau de bord</Link></li>
        <li><Link to="/questionnaire">Questionnaire</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;

