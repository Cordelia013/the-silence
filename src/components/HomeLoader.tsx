import AbstractShape from "../layouts/AbstractShape";

const HomeLoader = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      textAlign: 'center',
      height: '100vh',
    }}>
      <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}>
        <div style={{  }}>-</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem',  gap: '1rem' }}>
          <img src="/loader.svg" alt="Chargement" />
          <p
            style={{
              marginLeft: '0.5rem',
              fontWeight: 300,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Musée Matisse
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem',
            fontWeight: 300,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={(e) => {
            // Déclenche le clic sur le parent pour ouvrir Home
            if (e.currentTarget.parentElement?.parentElement) {
              (e.currentTarget.parentElement.parentElement as HTMLElement).click();
            }
          }}
        >
          clique pour continuer
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '10rem',
          margin: '5rem ',
        }}
      >
        <AbstractShape />
      </div>
    </div>
  );
};

export default HomeLoader;