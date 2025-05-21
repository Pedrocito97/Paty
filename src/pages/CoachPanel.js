import React, { useState } from 'react';
import './Form.css';

function CoachPanel() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [level, setLevel] = useState('debutant');
  const [series, setSeries] = useState(3);
  const [reps, setReps] = useState(10);

  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, upload the exercise
    alert('Exercice ajouté');
    setTitle('');
    setVideo('');
  };

  return (
    <div className="form-container">
      <h2>Ajout d'exercice</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL vidéo"
          value={video}
          onChange={e => setVideo(e.target.value)}
          required
        />
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="debutant">Débutant</option>
          <option value="intermediaire">Intermédiaire</option>
          <option value="avance">Avancé</option>
        </select>
        <input
          type="number"
          placeholder="Séries"
          value={series}
          onChange={e => setSeries(e.target.value)}
        />
        <input
          type="number"
          placeholder="Répétitions"
          value={reps}
          onChange={e => setReps(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default CoachPanel;
