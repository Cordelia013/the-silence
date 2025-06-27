import React from "react";

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={{
        background: `url(/assets/bg-card.jpg) center/cover no-repeat`,
        position: 'relative',
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: 16,
        width: "100%",
        height: "100%",
        maxWidth: "400px",
        maxHeight: "300px",
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
                top: '-8px',
                left: '16px',
                fontSize: '1rem',
                color: 'white',
                width: '200px',
                height: '32px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
            }}
        >
            Nouvelle Exposition
        </div>

        {/* Content overlay */}
        <div
            style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "rgba(0, 0, 0, 0.75)",
                padding: "1rem",
                borderRadius: "4px",
                color: "white",
            }}
        >
            <h3 style={{ 
                fontSize: "1.25rem", 
                margin: "0 0 0.5rem 0",
                fontWeight: "bold",
                lineHeight: "1.2"
            }}>
                RÉVOLUTION CUBISTE
            </h3>
            <p style={{ 
                margin: "0 0 0.25rem 0", 
                fontSize: "0.9rem",
                lineHeight: "1.3"
            }}>
                Vivez l'éveil artistique au Musée Matisse
            </p>
            <p style={{ 
                margin: "0", 
                fontSize: "0.9rem",
                lineHeight: "1.3"
            }}>
                avec Braque, Paul Klee et les maîtres du Cubisme
            </p>
        </div>
    </div>
);

export default Card;