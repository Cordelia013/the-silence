import { useState, useEffect } from "react";
import AbstractShape from "../layouts/AbstractShape";

const HomeLoader = () => {
  const [animatedLetters, setAnimatedLetters] = useState<number[]>([]);
  const text = "clique pour continuer";
  
  // Colors from the Matisse museum theme
  const colors = ['#CB181F', '#00339F', '#F5E256', '#FFFFFF'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLetters(prev => {
        // Add a new random letter index
        const newIndex = Math.floor(Math.random() * text.length);
        const updated = [...prev, newIndex];
        
        // Keep only the last 8 animated letters to create a wave effect
        return updated.slice(-8);
      });
    }, 150); // Change letter color every 150ms
    
    return () => clearInterval(interval);
  }, [text.length]);

  const getLetterStyle = (index: number) => {
    const isAnimated = animatedLetters.includes(index);
    const animationIndex = animatedLetters.indexOf(index);
    
    return {
      color: isAnimated 
        ? colors[animationIndex % colors.length]
        : '#FFFFFF',
      transition: 'color 0.3s ease-in-out',
      display: 'inline-block',
    };
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      textAlign: 'center',
      height: '100vh',
    }}>
      <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}>
        <div style={{  }}>-</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem',  gap: '1rem' }}>
          <img src="/loader.svg" alt="Chargement" />
          <p
            style={{
              marginLeft: '0.5rem',
              fontWeight: 300,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Musée Matisse
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem',
            fontWeight: 300,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={(e) => {
            // Déclenche le clic sur le parent pour ouvrir Home
            if (e.currentTarget.parentElement?.parentElement) {
              (e.currentTarget.parentElement.parentElement as HTMLElement).click();
            }
          }}
        >
          {text.split('').map((letter, index) => (
            <span
              key={index}
              style={getLetterStyle(index)}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '10rem',
          margin: '5rem ',
        }}
      >
        <AbstractShape />
      </div>
    </div>
  );
};

export default HomeLoader;