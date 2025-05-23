import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LEVEL_LABELS } from '../context/Level';

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  return (
    <main className="container">
      <h1 className="text-gradient">Mon tableau de bord</h1>
      <p style={{ marginBottom: '1rem' }}>Niveau: {LEVEL_LABELS[auth.level]}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
          <h3>Objectif hebdomadaire</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>3/5</p>
          <p>séances d'entraînement</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </div>
        </div>
        
        <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
          <h3>Calories brûlées</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>1,240</p>
          <p>cette semaine</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '70%' }}></div>
          </div>
        </div>
        
        <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
          <h3>Hydratation</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>1.8L</p>
          <p>aujourd'hui</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%', background: 'linear-gradient(to right, #38bdf8, #0ea5e9)' }}></div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="card-title">Progression</h2>
        <div style={{ height: '250px', background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)', borderRadius: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: '0.1' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} style={{ 
                position: 'absolute', 
                bottom: `${Math.random() * 200}px`, 
                left: `${i * 10}%`, 
                width: '1px', 
                height: `${Math.random() * 200 + 50}px`, 
                background: 'var(--primary-color)',
                boxShadow: '0 0 5px rgba(79, 70, 229, 0.5)'
              }}></div>
            ))}
          </div>
          <p style={{ position: 'relative', zIndex: '1' }}>Graphique de progression (intégration future)</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="card-title">Programme d'entraînement cette semaine</h2>
        <div className="schedule-grid">
          <div className="schedule-item">
            <div className="schedule-day">Lundi</div>
            <p>Entraînement du haut du corps</p>
            <small>45 min · Intensité moyenne</small>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">Mercredi</div>
            <p>Entraînement des jambes</p>
            <small>60 min · Intensité élevée</small>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">Vendredi</div>
            <p>Cardio & Core</p>
            <small>30 min · Intensité moyenne</small>
          </div>
          <div className="schedule-item">
            <div className="schedule-day">Dimanche</div>
            <p>Yoga & Récupération</p>
            <small>45 min · Intensité faible</small>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="card-title">Conseils nutritionnels</h2>
        <p>Votre plan nutritionnel personnalisé sera bientôt disponible. En attendant, voici quelques conseils :</p>
        <ul>
          <li>Buvez au moins 2L d'eau par jour pour rester bien hydraté</li>
          <li>Privilégiez les protéines maigres comme le poulet, le poisson et les légumineuses</li>
          <li>Incorporez des légumes verts à chaque repas pour les vitamines et les minéraux</li>
          <li>Limitez les sucres raffinés et les aliments ultra-transformés</li>
          <li>Prenez un petit-déjeuner équilibré pour bien commencer la journée</li>
        </ul>
        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Voir le plan complet</button>
      </div>
      
      <div className="card">
        <h2 className="card-title">Vos objectifs</h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 250px', padding: '1.5rem', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '0.75rem', border: '1px solid rgba(79, 70, 229, 0.15)' }}>
            <h3>Court terme</h3>
            <p>Amélioration de l'endurance</p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '35%' }}></div>
            </div>
            <p style={{ textAlign: 'right', fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>35% complété</p>
          </div>
          <div style={{ flex: '1 1 250px', padding: '1.5rem', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '0.75rem', border: '1px solid rgba(79, 70, 229, 0.15)' }}>
            <h3>Long terme</h3>
            <p>Perte de poids : 5kg</p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '20%' }}></div>
            </div>
            <p style={{ textAlign: 'right', fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>20% complété</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

