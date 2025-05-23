import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (!video) {
      setError('Veuillez sélectionner une vidéo.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', video);
      formData.append('title', title);
      formData.append('description', description);

      const response = await fetch('/api/upload-video', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMessage('Vidéo envoyée avec succès');
        setVideo(null);
        setTitle('');
        setDescription('');
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.error || "Erreur lors de l'envoi");
      }
    } catch {
      setError("Erreur lors de l'envoi");
    }
  };

  return (
    <main className="container" style={{ maxWidth: '600px' }}>
      <h1>Ajouter une vidéo</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="file" accept="video/*" onChange={e => setVideo(e.target.files ? e.target.files[0] : null)} />
        <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} rows={4} />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {message && <div style={{ color: 'green' }}>{message}</div>}
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </main>
  );
};

export default AdminDashboard;
