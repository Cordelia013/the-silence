

function Header() {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',  // Plus explicite
            gap: '1rem', 
            padding: '2rem 5rem' 
      }}>
  <svg width="82" height="71" viewBox="0 0 82 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="82" height="71" fill="#00339F"/>
<rect y="22.2483" width="56.1676" height="48.7517" fill="#F5E256"/>
<rect y="46.5634" width="28.0838" height="24.4366" fill="#CB181F"/>
<rect x="35" y="16" width="37" height="6" fill="#F5E256"/>
<rect x="18" y="29" width="45" height="6" fill="#CB181F"/>
<rect x="11" y="42" width="37" height="6" fill="#00339F"/>
</svg>

  


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