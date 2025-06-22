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
width: 488,
height: 202,
    margin: "16px auto",
};

const Card: React.FC<React.PropsWithChildren<object>> = () => (
    <div style={cardStyle}>
           <p
            style={{
                background: '#CB181F',
                position: 'relative',
                fontSize: '1.25rem',
                color: 'white',
                width: '210px',
                height: '27px',
               
                textAlign: 'center',
                padding: '5px',
             
            }}
            >
            Nouvelle Exposition
            </p>
    </div>
);

export default Card;
