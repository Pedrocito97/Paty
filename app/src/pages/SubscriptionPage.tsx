import React from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPage: React.FC = () => {
  return (
    <section>
      <h2>Souscription</h2>
      <p>Intégration Stripe à venir.</p>
      <p>Après votre paiement, veuillez compléter le questionnaire de santé.</p>
      <Link to="/questionnaire">
        <button>Questionnaire Santé</button>
      </Link>
    </section>
  );
};

export default SubscriptionPage;

