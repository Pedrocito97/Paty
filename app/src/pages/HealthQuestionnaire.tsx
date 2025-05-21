import React from 'react';

const HealthQuestionnaire: React.FC = () => {
  return (
    <section>
      <h2>Questionnaire Santé</h2>
      <p>Ce formulaire doit être complété lors de l'inscription.</p>
      <form>
        <div>
          <label htmlFor="age">Âge:</label>
          <input id="age" type="number" min="0" />
        </div>
        <div>
          <label htmlFor="medical">Antécédents médicaux:</label>
          <textarea id="medical" rows={4} />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default HealthQuestionnaire;

