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
        maxWidth: "450px",
        maxHeight: "350px",
        minWidth: "300px",
        minHeight: "250px",
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
                background: '#CB181F',
                position: 'absolute',
                top: '-10px',
                left: '24px',
                fontSize: '1.1rem',
                color: 'white',
                width: '220px',
                height: '36px',
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
                bottom: "24px",
                left: "24px",
                right: "24px",
                background: "rgba(0, 0, 0, 0.8)",
                padding: "1.5rem",
                borderRadius: "8px",
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "1.4rem", 
                margin: "0 0 0.75rem 0",
                fontWeight: "bold",
                lineHeight: "1.2"
            }}>
                RÉVOLUTION CUBISTE
            </h3>
            <p style={{ 
                margin: "0 0 0.5rem 0", 
                fontSize: "1rem",
                lineHeight: "1.4"
            }}>
                Vivez l'éveil artistique au Musée Matisse
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "1rem",
                lineHeight: "1.4"
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme
            </p>
        </div>
    </div>
);

export default Card;