const Footer = () => (
    <footer
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            height: '10vh', // MODIFIABLE: Hauteur du footer
            minHeight: '80px', // MODIFIABLE: Hauteur minimale du footer
            position: 'relative',
        }}
    >
        {/* Left section - Address and hours */}
        <div style={{ 
            background: '#00339F', // MODIFIABLE: Couleur de fond section gauche
            flex: 1, // MODIFIABLE: Proportion de la section gauche
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '1.5rem', // MODIFIABLE: Espacement à gauche du texte
        }}>
            <p style={{ 
                fontWeight: 'bold', 
                margin: '0.1rem 0',
                fontSize: '0.9rem', // MODIFIABLE: Taille du texte adresse
                lineHeight: '1.1'
            }}>
                164, avenue des Arènes de Cimiez {/* MODIFIABLE: Adresse */}
            </p>
            <p style={{ 
                margin: '0.1rem 0',
                fontSize: '0.9rem', // MODIFIABLE: Taille du texte horaires
                lineHeight: '1.1'
            }}>
                Ouvert tous les jours sauf le Mardi {/* MODIFIABLE: Jours d'ouverture */}
            </p>
            <p style={{ 
                margin: '0.1rem 0',
                fontSize: '0.9rem', // MODIFIABLE: Taille du texte horaires
                lineHeight: '1.1'
            }}>
                10h - 18h {/* MODIFIABLE: Heures d'ouverture */}
            </p>
        </div>

        {/* Middle section - Yellow */}
        <div style={{ 
            background: '#F5E256', // MODIFIABLE: Couleur de fond section milieu
            flex: 1, // MODIFIABLE: Proportion de la section milieu
            height: '100%' 
        }}></div>

        {/* Right section - Legal links */}
        <div style={{ 
            background: '#00339F', // MODIFIABLE: Couleur de fond section droite
            flex: 2, // MODIFIABLE: Proportion de la section droite
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1.5rem', // MODIFIABLE: Espacement entre les liens
                    paddingLeft: '1.5rem', // MODIFIABLE: Espacement à gauche des liens
                    paddingBottom: '1rem', // MODIFIABLE: Espacement en bas des liens
                }}
            >
                <p style={{ 
                    fontWeight: 'bold', 
                    margin: 0,
                    fontSize: '0.9rem', // MODIFIABLE: Taille du texte des liens
                    cursor: 'pointer'
                }}>
                    Mentions légales {/* MODIFIABLE: Texte du lien */}
                </p>
                <p style={{ 
                    margin: 0,
                    fontSize: '0.9rem', // MODIFIABLE: Taille du texte des liens
                    cursor: 'pointer'
                }}>
                    Politique de cookies (UE) {/* MODIFIABLE: Texte du lien */}
                </p>
                <p style={{ 
                    margin: 0,
                    fontSize: '0.9rem', // MODIFIABLE: Taille du texte des liens
                    cursor: 'pointer'
                }}>
                    Newsletter {/* MODIFIABLE: Texte du lien */}
                </p>
            </div>
        </div>

        {/* Musée Matisse banner - positioned absolutely */}
        <div
            style={{
            position: 'absolute',
            top: 0, // MODIFIABLE: Position verticale du banner
            left: '60%',
            transform: 'translateX(-50%)',
            background: '#CB181F', // MODIFIABLE: Couleur de fond du banner
            color: 'white',
            fontSize: '1.5rem', // MODIFIABLE: Taille du texte du banner
            fontWeight: 'normal',
            width: '350px', // MODIFIABLE: Largeur du banner
            height: '3rem', // MODIFIABLE: Hauteur du banner
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            paddingRight: '1.5rem', // MODIFIABLE: Espacement à droite du texte
            zIndex: 10,
            }}
        >
            Musée Matisse{/* MODIFIABLE: Texte du banner */}
        </div>
    </footer>
);

export default Footer;