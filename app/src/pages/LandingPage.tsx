import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <main>
      <h1>Bienvenue sur iPaty</h1>
      <p>Choisissez votre formule d'entraînement et commencez dès aujourd'hui.</p>
      <Link to="/subscribe">
        <button>Je m'abonne</button>
      </Link>
    </main>
  );
};

export default LandingPage;

