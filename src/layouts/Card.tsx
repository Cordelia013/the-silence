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

const Card: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <div style={cardStyle}>
        {children}
    </div>
);

export default Card;
