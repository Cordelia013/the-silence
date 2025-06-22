

function Header() {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',  // Plus explicite
            gap: '1rem', 
            padding: '2rem 5rem' 
          }}>
            <img 
              src="/loader.svg" 
              alt="Loader" 
              style={{ height: '3rem', display: 'block' }}  // display: block évite les problèmes baseline
            />
            <h2 style={{ 
              fontSize: '2.5rem',
              margin: 0,  // Retire les margins par défaut du h2
              lineHeight: 1  // Contrôle la hauteur de ligne
            }}>
              Musée Matisse
            </h2>
          </header>
    );
}

export default Header;  