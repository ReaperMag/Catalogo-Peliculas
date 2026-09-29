import React from 'react';

export const EpisodeCard = ({ episode }: { episode: any }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      backgroundColor: '#1e293b',
      padding: '16px',
      borderRadius: '12px',
      border: '1px solid #334155',
      alignItems: 'flex-start'
    }}>
      <div style={{ position: 'relative', width: '220px', height: '124px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
        <img 
          src={episode.imageUrl} 
          alt={episode.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: '#fff',
          padding: '2px 6px',
          fontSize: '12px',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}>
          {episode.duration}
        </span>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              EPISODIO {episode.episodeNumber}
            </span>
            <h4 style={{ color: '#ffffff', margin: '2px 0 0 0', fontSize: '18px', fontWeight: 'bold' }}>
              {episode.title}
            </h4>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '4px 8px', borderRadius: '6px', color: '#f59e0b', fontWeight: 'bold', fontSize: '14px' }}>
            ★ {episode.rating}
          </div>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0 0 8px 0' }}>{episode.airDate}</p>
        <p style={{ color: '#cbd5e1', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>{episode.synopsis}</p>
      </div>
    </div>
  );
};