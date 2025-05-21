import React, { useState } from 'react';

const samplePrograms = [
  { id: 1, title: 'Programme Débutant', level: 'debutant' },
  { id: 2, title: 'Programme Intermédiaire', level: 'intermediaire' },
  { id: 3, title: 'Programme Avancé', level: 'avance' },
];

function Programs() {
  const [programs] = useState(samplePrograms);

  return (
    <div className="container">
      <h2>Mes Programmes</h2>
      <ul>
        {programs.map(p => (
          <li key={p.id}>{p.title} - {p.level}</li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
