import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/subscribe">Souscription</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </nav>
);

export default NavBar;

