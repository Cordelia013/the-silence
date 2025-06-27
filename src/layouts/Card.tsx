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
        maxHeight: "220px", // MODIFIABLE: Hauteur maximale de la carte (réduite de 300px à 220px)
        minWidth: "300px", // MODIFIABLE: Largeur minimale de la carte
        minHeight: "180px", // MODIFIABLE: Hauteur minimale de la carte (réduite de 150px à 180px)
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
                fontSize: '1rem', // MODIFIABLE: Taille du texte du banner (réduite de 1.1rem à 1rem)
                color: 'white',
                width: '200px', // MODIFIABLE: Largeur du banner (réduite de 220px à 200px)
                height: '32px', // MODIFIABLE: Hauteur du banner (réduite de 36px à 32px)
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
                bottom: "20px", // MODIFIABLE: Distance du bas (réduite de 24px à 20px)
                left: "20px", // MODIFIABLE: Distance de la gauche (réduite de 24px à 20px)
                right: "20px", // MODIFIABLE: Distance de la droite (réduite de 24px à 20px)
                background: "rgba(0, 0, 0, 0.8)", // MODIFIABLE: Couleur et opacité du fond
                padding: "1rem", // MODIFIABLE: Espacement interne (réduit de 1.5rem à 1rem)
                borderRadius: "8px", // MODIFIABLE: Arrondi des coins
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "1.2rem", // MODIFIABLE: Taille du titre principal (réduite de 1.4rem à 1.2rem)
                margin: "0 0 0.5rem 0", // Marge réduite
                fontWeight: "bold",
                lineHeight: "1.1" // Hauteur de ligne réduite
            }}>
                RÉVOLUTION CUBISTE {/* MODIFIABLE: Titre de l'exposition */}
            </h3>
            <p style={{ 
                margin: "0 0 0.3rem 0", // Marge réduite
                fontSize: "0.9rem", // MODIFIABLE: Taille du texte descriptif (réduite de 1rem à 0.9rem)
                lineHeight: "1.2" // Hauteur de ligne réduite
            }}>
                Vivez l'éveil artistique au Musée Matisse {/* MODIFIABLE: Description ligne 1 */}
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "0.9rem", // MODIFIABLE: Taille du texte descriptif (réduite de 1rem à 0.9rem)
                lineHeight: "1.2" // Hauteur de ligne réduite
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme {/* MODIFIABLE: Description ligne 2 */}
            </p>
        </div>
    </div>
);

export default Card;