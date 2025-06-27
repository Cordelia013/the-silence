// Copié depuis public/assets/carousel.tsx
// Merci de vérifier le contenu original et d'adapter si besoin.

import  { useState } from "react";
import tablo15 from "./tablo-15.jpg";
import tablo16 from "./tablo-16.jpg";
import tablo17 from "./tablo-17.jpg";

const images = [tablo15, tablo16, tablo17];

const CurvedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.container}>
      <div style={styles.carouselWrapper}>
        <button onClick={goToPrev} style={styles.arrowBtn} aria-label="Précédent">⟨</button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          style={styles.image}
        />
        <button onClick={goToNext} style={styles.arrowBtn} aria-label="Suivant">⟩</button>
      </div>
      <div style={styles.paginationContainer}>
        {images.map((_, idx) => (
          <span
            key={idx}
            style={idx === activeIndex ? styles.dot : styles.inactiveDot}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
  },
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 600,
    height: 250,
    position: "relative" as const,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#fff",
    border: "2px solid #333",
    display: "inline-block",
    cursor: "pointer",
    margin: "0 4px",
  },
  inactiveDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#bbb",
    border: "2px solid #eee",
    display: "inline-block",
    cursor: "pointer",
    margin: "0 4px",
    opacity: 0.5,
  },
  arrowBtn: {
    background: "none",
    border: "none",
    fontSize: 32,
    cursor: "pointer",
    color: "#333",
    padding: "0 16px",
    userSelect: "none" as const,
    outline: "none",
  },
};

export default CurvedCarousel;
