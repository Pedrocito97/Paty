import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Level, LEVEL_LABELS } from '../context/Level';

const HealthQuestionnaire: React.FC = () => {
  const auth = useContext(AuthContext);
  const [userLevel, setUserLevel] = useState<Level>(auth?.level ?? Level.LEVEL1);

  if (!auth) return null;

  return (
    <main className="container">
      <h1>Questionnaire de Santé</h1>
      <p>Ces informations nous aideront à personnaliser votre programme d'entraînement. Toutes vos données resteront strictement confidentielles.</p>
      
      <div className="card">
        <form>
          <div className="form-group">
            <label htmlFor="age">Âge:</label>
            <input id="age" type="number" min="16" max="99" placeholder="Votre âge" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="height">Taille (cm):</label>
            <input id="height" type="number" min="100" max="250" placeholder="Votre taille en cm" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="weight">Poids (kg):</label>
            <input id="weight" type="number" min="30" max="300" placeholder="Votre poids en kg" required />
          </div>

          <div className="form-group">
            <label htmlFor="level">Votre niveau:</label>
            <select
              id="level"
              value={userLevel}
              onChange={e => {
                const lvl = e.target.value as Level;
                setUserLevel(lvl);
                auth.setLevel(lvl);
              }}
            >
              {Object.values(Level).map(l => (
                <option key={l} value={l}>{LEVEL_LABELS[l]}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="activity">Niveau d'activité actuel:</label>
            <select id="activity" required>
              <option value="">Sélectionnez votre niveau</option>
              <option value="sedentary">Sédentaire (peu ou pas d'exercice)</option>
              <option value="light">Léger (exercice 1-3 fois/semaine)</option>
              <option value="moderate">Modéré (exercice 3-5 fois/semaine)</option>
              <option value="active">Actif (exercice quotidien intense)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="goals">Objectifs principaux:</label>
            <select id="goals" required>
              <option value="">Sélectionnez votre objectif</option>
              <option value="weight-loss">Perte de poids</option>
              <option value="muscle">Prise de muscle</option>
              <option value="endurance">Amélioration de l'endurance</option>
              <option value="health">Maintien d'une bonne santé</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="medical">Antécédents médicaux ou blessures:</label>
            <textarea id="medical" rows={4} placeholder="Décrivez tout problème médical ou blessure que nous devrions prendre en compte" />
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn">Envoyer</button>
            <Link to="/dashboard" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              Accéder au tableau de bord
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default HealthQuestionnaire;

