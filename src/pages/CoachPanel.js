import React, { useState } from 'react';

/**
 * CoachPanel component allows coaches to upload a video.
 */
function CoachPanel() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    try {
      setUploading(true);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      if (data && data.url) {
        setVideoUrl(data.url);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <h2>Coach Panel</h2>
      <input type="file" accept="video/*" onChange={handleChange} />
      {uploading && <p>Uploading...</p>}
      {videoUrl && (
        <div>
          <p>Video uploaded:</p>
          <video src={videoUrl} controls width="400" />
        </div>
      )}
    </div>
  );
}

export default CoachPanel;
