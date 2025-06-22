import React from 'react'

function History() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      border: '2px solid red',
     
      height: '100vh',
    }}>
      
      <div style={{ padding: '0.5rem', background: '#333' }}>Colonne 1</div>
      <div style={{ padding: '0.5rem', background: '#666' }}>Colonne 2</div>
    </div>
  )
}

export default History