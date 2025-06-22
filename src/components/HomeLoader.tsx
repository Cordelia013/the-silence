const HomeLoader = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    border: '2px solid red',
    padding: '1rem',
    height: '100vh',
  }}>
    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gap: '0.5rem' }}>
      <div style={{ padding: '0.5rem', background: '#333' }}>Colonne 1 - Ligne 1</div>
      <div style={{ padding: '0.5rem', background: '#444' }}>Colonne 1 - Ligne 2</div>
      <div style={{ padding: '0.5rem', background: '#555' }}>Colonne 1 - Ligne 3</div>
    </div>
    <div style={{ padding: '0.5rem', background: '#666' }}>Colonne 2</div>
  </div>
);

export default HomeLoader;