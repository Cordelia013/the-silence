function Header() {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',  // Plus explicite
            gap: '1rem', // MODIFIABLE: Espacement entre logo et titre
            padding: '2rem 5rem' // MODIFIABLE: Espacement interne (vertical horizontal)
          }}>
            <img 
              src="/loader.svg" 
              alt="Loader" 
              style={{ 
                height: '3rem', // MODIFIABLE: Taille du logo
                display: 'block' 
              }}
            />
            <h2 style={{ 
              fontSize: '2.5rem', // MODIFIABLE: Taille du titre
              margin: 0,  // Retire les margins par défaut du h2
              lineHeight: 1  // Contrôle la hauteur de ligne
            }}>
              Musée Matisse {/* MODIFIABLE: Texte du titre */}
            </h2>
          </header>
    );
}

export default Header;