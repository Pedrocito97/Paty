import React from 'react';
import { useAuth } from '../context/AuthContext';

function Account() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h2>Mon compte</h2>
      <p>Email : {user?.email}</p>
      <p>Abonnement : Plan de base</p>
      {/* Ajout d'options de gestion d'abonnement ici */}
    </div>
  );
}

export default Account;
