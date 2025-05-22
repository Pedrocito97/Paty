import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement upload logic
    console.log({ video, title, description });
  };

  return (
    <main className="container" style={{ maxWidth: '600px' }}>
      <h1>Ajouter une vidéo</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="file" accept="video/*" onChange={e => setVideo(e.target.files ? e.target.files[0] : null)} />
        <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} rows={4} />
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </main>
  );
};

export default AdminDashboard;
