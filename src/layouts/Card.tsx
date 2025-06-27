import React from "react";

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={{
        background: `url(/assets/bg-card.jpg) center/cover no-repeat`,
        position: 'relative',
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        padding: 20, // MODIFIABLE: Espacement interne (réduit de 24px à 20px)
        width: "100%",
        height: "100%",
        maxWidth: "450px", // MODIFIABLE: Largeur maximale de la carte
        maxHeight: "176px", // MODIFIABLE: Hauteur maximale de la carte (réduite de 220px à 176px - 20%)
        minWidth: "300px", // MODIFIABLE: Largeur minimale de la carte
        minHeight: "144px", // MODIFIABLE: Hauteur minimale de la carte (réduite de 180px à 144px - 20%)
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
                top: '-8px', // MODIFIABLE: Position verticale du banner (réduite de -10px à -8px)
                left: '20px', // MODIFIABLE: Position horizontale du banner (réduite de 24px à 20px)
                fontSize: '0.85rem', // MODIFIABLE: Taille du texte du banner (réduite de 1rem à 0.85rem - 15%)
                color: 'white',
                width: '170px', // MODIFIABLE: Largeur du banner (réduite de 200px à 170px - 15%)
                height: '26px', // MODIFIABLE: Hauteur du banner (réduite de 32px à 26px - 19%)
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
                bottom: "16px", // MODIFIABLE: Distance du bas (réduite de 20px à 16px - 20%)
                left: "16px", // MODIFIABLE: Distance de la gauche (réduite de 20px à 16px - 20%)
                right: "16px", // MODIFIABLE: Distance de la droite (réduite de 20px à 16px - 20%)
                background: "rgba(0, 0, 0, 0.8)", // MODIFIABLE: Couleur et opacité du fond
                padding: "0.8rem", // MODIFIABLE: Espacement interne (réduit de 1rem à 0.8rem - 20%)
                borderRadius: "6px", // MODIFIABLE: Arrondi des coins (réduit de 8px à 6px)
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "1rem", // MODIFIABLE: Taille du titre principal (réduite de 1.2rem à 1rem - 17%)
                margin: "0 0 0.3rem 0", // Marge réduite (de 0.5rem à 0.3rem)
                fontWeight: "bold",
                lineHeight: "1.05" // Hauteur de ligne réduite (de 1.1 à 1.05)
            }}>
                RÉVOLUTION CUBISTE {/* MODIFIABLE: Titre de l'exposition */}
            </h3>
            <p style={{ 
                margin: "0 0 0.2rem 0", // Marge réduite (de 0.3rem à 0.2rem)
                fontSize: "0.75rem", // MODIFIABLE: Taille du texte descriptif (réduite de 0.9rem à 0.75rem - 17%)
                lineHeight: "1.1" // Hauteur de ligne réduite (de 1.2 à 1.1)
            }}>
                Vivez l'éveil artistique au Musée Matisse {/* MODIFIABLE: Description ligne 1 */}
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "0.75rem", // MODIFIABLE: Taille du texte descriptif (réduite de 0.9rem à 0.75rem - 17%)
                lineHeight: "1.1" // Hauteur de ligne réduite (de 1.2 à 1.1)
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme {/* MODIFIABLE: Description ligne 2 */}
            </p>
        </div>
    </div>
);

export default Card;