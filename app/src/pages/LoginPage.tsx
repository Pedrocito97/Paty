import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!auth) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = auth.login(username, password);
    if (code) {
      navigate('/2fa');
    } else {
      setError('Identifiants invalides');
    }
  };

  return (
    <main className="container" style={{ maxWidth: '400px' }}>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="btn">Se connecter</button>
      </form>
    </main>
  );
};

export default LoginPage;
