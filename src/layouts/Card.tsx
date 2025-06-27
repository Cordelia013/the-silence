import React from "react";

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={{
        background: `url(/assets/bg-card.jpg) center/cover no-repeat`,
        position: 'relative',
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        padding: 16, // MODIFIABLE: Espacement interne (réduit de 20px à 16px - 20%)
        width: "100%",
        height: "100%",
        maxWidth: "288px", // MODIFIABLE: Largeur maximale de la carte (réduite de 360px à 288px - 20%)
        maxHeight: "141px", // MODIFIABLE: Hauteur maximale de la carte (réduite de 176px à 141px - 20%)
        minWidth: "192px", // MODIFIABLE: Largeur minimale de la carte (réduite de 240px à 192px - 20%)
        minHeight: "115px", // MODIFIABLE: Hauteur minimale de la carte (réduite de 144px à 115px - 20%)
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
                top: '-6px', // MODIFIABLE: Position verticale du banner (réduite de -8px à -6px - 25%)
                left: '13px', // MODIFIABLE: Position horizontale du banner (réduite de 16px à 13px - 19%)
                fontSize: '0.65rem', // MODIFIABLE: Taille du texte du banner (réduite de 0.75rem à 0.65rem - 13%)
                color: 'white',
                width: '109px', // MODIFIABLE: Largeur du banner (réduite de 136px à 109px - 20%)
                height: '21px', // MODIFIABLE: Hauteur du banner (réduite de 26px à 21px - 19%)
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
                bottom: "13px", // MODIFIABLE: Distance du bas (réduite de 16px à 13px - 19%)
                left: "10px", // MODIFIABLE: Distance de la gauche (réduite de 12px à 10px - 17%)
                right: "10px", // MODIFIABLE: Distance de la droite (réduite de 12px à 10px - 17%)
                background: "rgba(0, 0, 0, 0.8)", // MODIFIABLE: Couleur et opacité du fond
                padding: "0.5rem", // MODIFIABLE: Espacement interne (réduit de 0.6rem à 0.5rem - 17%)
                borderRadius: "5px", // MODIFIABLE: Arrondi des coins (réduit de 6px à 5px - 17%)
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "0.8rem", // MODIFIABLE: Taille du titre principal (réduite de 0.9rem à 0.8rem - 11%)
                margin: "0 0 0.15rem 0", // Marge réduite (de 0.2rem à 0.15rem)
                fontWeight: "bold",
                lineHeight: "1.0" // Hauteur de ligne réduite (de 1.05 à 1.0)
            }}>
                RÉVOLUTION CUBISTE {/* MODIFIABLE: Titre de l'exposition */}
            </h3>
            <p style={{ 
                margin: "0 0 0.1rem 0", // Marge réduite (de 0.15rem à 0.1rem)
                fontSize: "0.55rem", // MODIFIABLE: Taille du texte descriptif (réduite de 0.65rem à 0.55rem - 15%)
                lineHeight: "1.05" // Hauteur de ligne réduite (de 1.1 à 1.05)
            }}>
                Vivez l'éveil artistique au Musée Matisse {/* MODIFIABLE: Description ligne 1 */}
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "0.55rem", // MODIFIABLE: Taille du texte descriptif (réduite de 0.65rem à 0.55rem - 15%)
                lineHeight: "1.05" // Hauteur de ligne réduite (de 1.1 à 1.05)
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme {/* MODIFIABLE: Description ligne 2 */}
            </p>
        </div>
    </div>
);

export default Card;