import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const TwoFAPage: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  if (!auth) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.verifyCode(code)) {
      navigate('/dashboard');
    } else {
      setError('Code incorrect');
    }
  };

  return (
    <main className="container" style={{ maxWidth: '400px' }}>
      <h1>Vérification en deux étapes</h1>
      {auth.twoFACode && (
        <p style={{ fontSize: '0.9rem', color: '#555' }}>
          (Code de démonstration: <strong>{auth.twoFACode}</strong>)
        </p>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Entrez le code" value={code} onChange={e => setCode(e.target.value)} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="btn">Vérifier</button>
      </form>
    </main>
  );
};

export default TwoFAPage;
