import React from "react";
import bgCard from "../../public/assets/bg-card.jpg";

const cardStyle: React.CSSProperties = {
    background: `url(${bgCard}) center/cover no-repeat`,
    position: "absolute",
    top: "60%",
    left: "60%",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    padding: 16,
    width: "25vw",
    height: "24vh",
    margin: "10px auto",
};

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={cardStyle}>
           <p
            style={{
                background: '#CB181F',
                position: 'relative',
                fontSize: '1.25rem',
                color: 'white',
                width: '15vw',
                height: '3vh',
                textAlign: 'center',
                padding: '5px',
              lineHeight: '3vh',
             
            }}
            >
            Nouvelle Exposition
        </p>
        <div
            style={{
            position: "absolute",
            marginTop: "5rem",
            top: "1vh",
            
            width: "85%",
            minWidth: "180px",
            maxWidth: "95%",
            height: "50%",
                minHeight: "1vh",
                paddingTop: "1%",
          paddingLeft: "1rem",
            background: "rgba(0, 0, 0, 0.75)",
            boxSizing: "border-box",
            }}
        >
            <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", margin: 0 }}>RÉVOLUTION CUBISTE</h3>
            <p style={{ marginBottom: "0.3rem", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
                Vivez l’éveil artistique au Musée Matisse
            </p>
            <p style={{ marginTop: 0, fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
                avec Braque, Paul Klee et les maîtres du Cubisme
            </p>
        </div>
    </div>
);

export default Card;
