import React from "react";

interface CardProps {
    backgroundUrl: string;
    bannerText: string;
    bannerText2?: string;
    title?: string;
    subtitle1?: string;
    subtitle2?: string;

    
}

const Card: React.FC<CardProps> = ({
    backgroundUrl,
    bannerText,
    title = "Default Title",    
    subtitle1 = "Default Subtitle 1",
    subtitle2 = "Default Subtitle 2",
    
}) => (
    <div
        style={{
            background: `url(${backgroundUrl}) center/cover no-repeat`,
            position: "relative",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            padding: 16,
            width: "100%",
            height: "100%",
            maxWidth: "456px",
            maxHeight: "300px",
            minWidth: "192px",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignSelf: "center",
            justifySelf: "center",
        }}
    >
        {/* Red banner */}
        <div
            style={{
                background: "#CB181F",
                position: "absolute",
                top: "6px",
                left: "13px",
                fontSize: "1.3rem",
                color: "white",
                width: "210px",
                height: "47px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                fontWeight: "500",
            }}
        >
            {bannerText}
        </div>

        {/* Content overlay */}
        <div
            style={{
            position: "absolute",
            bottom: "13px",
            left: "8px",
            right: "auto",
            background: "rgba(0, 0, 0, 0.8)",
            padding: "0.5rem",
            color: "white",
            fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}
        >
            <h3
            style={{
                fontSize: "2rem",
                margin: "0 0 1rem 0",
                fontWeight: "bold",
                lineHeight: "1.0",
                fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}
            >
            {title}
            </h3>
            <p
            style={{
                margin: "0 0 0.50rem 0",
                fontSize: "1rem",
                lineHeight: "1.05",
                fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}
            >
            {subtitle1}
            </p>
            <p
            style={{
                margin: "0",
                fontSize: "1rem",
                fontWeight: "700",
                lineHeight: "1.05",
                fontFamily: "'Beatrice Deck', Arial, sans-serif",
            }}
            >
            {subtitle2}
            </p>
        </div>
    </div>
);

export default Card;
