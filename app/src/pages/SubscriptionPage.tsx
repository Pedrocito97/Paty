import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

type Plan = 'basic' | 'premium' | 'annual';

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('premium');

  const handleCheckout = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ plan: selectedPlan })
      });
      const data = await response.json();
      if (data.id) {
        await stripe?.redirectToCheckout({ sessionId: data.id });
      }
    } catch (err) {
      console.error('Checkout error', err);
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };
  
  return (
    <>
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%)',
        color: 'white',
        padding: '5rem 1.5rem 10rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '-6rem'
      }}>
        <div className="hero-shape shape-circle"></div>
        <div className="hero-shape shape-dots"></div>
        
        <h1 style={{ color: 'white', position: 'relative', zIndex: 1 }}>Choisissez votre formule</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.2rem', position: 'relative', zIndex: 1 }}>
          Sélectionnez le plan qui correspond le mieux à vos objectifs de fitness et à votre budget.
        </p>
      </section>
      
      <main className="container">
        <div className="animate-fadeIn" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem', 
          margin: '0 auto 3rem', 
          position: 'relative',
          zIndex: 2
        }}>
          <div 
            className={`pricing-card ${selectedPlan === 'basic' ? 'animate-pulse' : ''}`}
            style={selectedPlan === 'basic' ? { transform: 'translateY(-10px) scale(1.02)', boxShadow: 'var(--shadow-xl)' } : {}}
            onClick={() => handleSelectPlan('basic')}
          >
            <div className="pricing-header">
              <h2 className="pricing-title">Formule Basique</h2>
              <div className="pricing-price">19,99€</div>
              <div className="pricing-period">par mois</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Accès à tous les programmes d'entraînement</li>
                <li>Suivi nutritionnel de base</li>
                <li>Communauté d'entraide</li>
                <li>Mises à jour mensuelles des programmes</li>
                <li>Support par email</li>
              </ul>
            </div>
            <div className="pricing-action">
              <button 
                className={`btn ${selectedPlan === 'basic' ? '' : 'btn-outline'}`} 
                onClick={() => handleSelectPlan('basic')}
              >
                {selectedPlan === 'basic' ? 'Plan sélectionné' : 'Sélectionner'}
              </button>
            </div>
          </div>
          
          <div 
            className={`pricing-card ${selectedPlan === 'premium' ? 'animate-pulse' : ''}`} 
            style={selectedPlan === 'premium' ? 
              { transform: 'translateY(-10px) scale(1.05)', boxShadow: 'var(--shadow-xl)' } : 
              { transform: 'scale(1.03)', boxShadow: 'var(--shadow-lg)' }}
            onClick={() => handleSelectPlan('premium')}
          >
            <div className="pricing-popular">POPULAIRE</div>
            <div className="pricing-header" style={{ background: 'linear-gradient(135deg, var(--secondary-color), var(--secondary-light))' }}>
              <h2 className="pricing-title">Formule Premium</h2>
              <div className="pricing-price">39,99€</div>
              <div className="pricing-period">par mois</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Tous les avantages de la formule Basique</li>
                <li>Programmes personnalisés</li>
                <li>Suivi avec un coach dédié</li>
                <li>Analyse approfondie de vos progrès</li>
                <li>Accès prioritaire aux nouvelles fonctionnalités</li>
                <li>Support prioritaire 7j/7</li>
              </ul>
            </div>
            <div className="pricing-action">
              <button 
                className={`btn ${selectedPlan === 'premium' ? '' : 'btn-outline'}`}
                style={{ background: selectedPlan === 'premium' ? 'var(--secondary-color)' : 'transparent', borderColor: 'var(--secondary-color)', color: selectedPlan === 'premium' ? 'white' : 'var(--secondary-color)' }} 
                onClick={() => handleSelectPlan('premium')}
              >
                {selectedPlan === 'premium' ? 'Plan sélectionné' : 'Sélectionner'}
              </button>
            </div>
          </div>
          
          <div 
            className={`pricing-card ${selectedPlan === 'annual' ? 'animate-pulse' : ''}`}
            style={selectedPlan === 'annual' ? { transform: 'translateY(-10px) scale(1.02)', boxShadow: 'var(--shadow-xl)' } : {}}
            onClick={() => handleSelectPlan('annual')}
          >
            <div className="pricing-header">
              <h2 className="pricing-title">Formule Annuelle</h2>
              <div className="pricing-price">199,99€</div>
              <div className="pricing-period">par an <span style={{ color: '#ffffff', background: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.5rem', borderRadius: '1rem', fontSize: '0.7rem', marginLeft: '0.5rem' }}>ÉCONOMISEZ 20%</span></div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Tous les avantages de la formule Premium</li>
                <li>Prix réduit (2 mois offerts)</li>
                <li>Consultation vidéo trimestrielle</li>
                <li>Plan nutritionnel personnalisé</li>
                <li>Accès à des ateliers exclusifs</li>
                <li>Support VIP 24h/24</li>
              </ul>
            </div>
            <div className="pricing-action">
              <button 
                className={`btn ${selectedPlan === 'annual' ? '' : 'btn-outline'}`} 
                onClick={() => handleSelectPlan('annual')}
              >
                {selectedPlan === 'annual' ? 'Plan sélectionné' : 'Sélectionner'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ maxWidth: '850px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <h2 className="card-title">Procéder au paiement</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Vous avez sélectionné la <strong>
              {selectedPlan === 'basic' ? 'Formule Basique' : 
              selectedPlan === 'premium' ? 'Formule Premium' : 'Formule Annuelle'}
            </strong>.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
            <button className="btn btn-lg" onClick={handleCheckout}>Payer et s'abonner</button>
          </div>
          
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Paiement sécurisé - Nous ne stockons pas vos informations de carte
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="card" style={{ maxWidth: '850px', margin: '0 auto 3rem', textAlign: 'center' }}>
          <h2 className="card-title">Étape suivante</h2>
          <p>Après votre paiement, veuillez compléter le questionnaire de santé pour personnaliser votre expérience.</p>
          <Link to="/questionnaire" className="btn btn-secondary btn-lg" style={{ marginTop: '1rem' }}>
            Questionnaire Santé
          </Link>
        </div>
      </main>
    </>
  );
};

export default SubscriptionPage;

