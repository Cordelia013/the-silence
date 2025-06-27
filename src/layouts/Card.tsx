import React from "react";

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={{
        background: `url(/assets/bg-card.jpg) center/cover no-repeat`,
        position: 'relative',
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        padding: 16, // MODIFIABLE: Espacement interne (réduit de 20px à 16px - 20%)
        width: "100%",
        height: "100%",
        maxWidth: "456px", // MODIFIABLE: Largeur maximale de la carte (réduite de 360px à 288px - 20%)
        maxHeight: "200px", // MODIFIABLE: Hauteur maximale de la carte (réduite de 176px à 141px - 20%)
        minWidth: "192px", // MODIFIABLE: Largeur minimale de la carte (réduite de 240px à 192px - 20%)
        minHeight: "115px", // MODIFIABLE: Hauteur minimale de la carte (réduite de 144px à 115px - 20%)
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        justifySelf: 'center',
    }}>
        {/* Red banner for "Nouvelle Exposition" */}
        <div
            style={{
            background: '#CB181F',
            position: 'absolute',
            top: '6px',
            left: '13px',
            fontSize: '1.3rem',
            color: 'white',
            width: '210px',
            height: '47px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            fontWeight: '500',
            }}
        >
            Nouvelle Exposition
        </div>

        {/* Content overlay */}
        <div
            style={{
            position: "absolute",
            bottom: "13px",
            left: "8px",
            right: "50px",
            background: "rgba(0, 0, 0, 0.8)",
            padding: "0.5rem",
            color: "white",
            fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}
        >
            <h3 style={{ 
            fontSize: "2rem",
            margin: "0 0 1rem 0",
            fontWeight: "bold",
            lineHeight: "1.0",
            fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}>
            RÉVOLUTION CUBISTE
            </h3>
            <p style={{ 
            margin: "0 0 0.50rem 0",
            fontSize: "1rem",
            lineHeight: "1.05",
            fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}>
            Vivez l'éveil artistique au Musée Matisse
            </p>
            <p style={{ 
            margin: "0", 
            fontSize: "1rem",
            lineHeight: "1.05",
            fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}>
            avec Braque, Paul Klee et les maîtres du Cubisme
            </p>
        </div>
    </div>
);

export default Card;