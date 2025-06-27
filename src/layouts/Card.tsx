import React from "react";

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={{
        background: `url(/assets/bg-card.jpg) center/cover no-repeat`,
        position: 'relative',
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        padding: 24,
        width: "100%",
        height: "100%",
        maxWidth: "450px", // MODIFIABLE: Largeur maximale de la carte
        maxHeight: "350px", // MODIFIABLE: Hauteur maximale de la carte
        minWidth: "300px", // MODIFIABLE: Largeur minimale de la carte
        minHeight: "250px", // MODIFIABLE: Hauteur minimale de la carte
        margin: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        justifySelf: 'center',
    }}>
        {/* Red banner for "Nouvelle Exposition" */}
        <div
            style={{
                background: '#CB181F', // MODIFIABLE: Couleur du banner rouge
                position: 'absolute',
                top: '-10px', // MODIFIABLE: Position verticale du banner
                left: '24px', // MODIFIABLE: Position horizontale du banner
                fontSize: '1.1rem', // MODIFIABLE: Taille du texte du banner
                color: 'white',
                width: '220px', // MODIFIABLE: Largeur du banner
                height: '36px', // MODIFIABLE: Hauteur du banner
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                fontWeight: '500',
            }}
        >
            Nouvelle Exposition {/* MODIFIABLE: Texte du banner */}
        </div>

        {/* Content overlay */}
        <div
            style={{
                position: "absolute",
                bottom: "24px", // MODIFIABLE: Distance du bas
                left: "24px", // MODIFIABLE: Distance de la gauche
                right: "24px", // MODIFIABLE: Distance de la droite
                background: "rgba(0, 0, 0, 0.8)", // MODIFIABLE: Couleur et opacité du fond
                padding: "1.5rem", // MODIFIABLE: Espacement interne
                borderRadius: "8px", // MODIFIABLE: Arrondi des coins
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "1.4rem", // MODIFIABLE: Taille du titre principal
                margin: "0 0 0.75rem 0",
                fontWeight: "bold",
                lineHeight: "1.2"
            }}>
                RÉVOLUTION CUBISTE {/* MODIFIABLE: Titre de l'exposition */}
            </h3>
            <p style={{ 
                margin: "0 0 0.5rem 0", 
                fontSize: "1rem", // MODIFIABLE: Taille du texte descriptif
                lineHeight: "1.4"
            }}>
                Vivez l'éveil artistique au Musée Matisse {/* MODIFIABLE: Description ligne 1 */}
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "1rem", // MODIFIABLE: Taille du texte descriptif
                lineHeight: "1.4"
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme {/* MODIFIABLE: Description ligne 2 */}
            </p>
        </div>
    </div>
);

export default Card;