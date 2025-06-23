import { useState, useEffect } from "react";
import AbstractShape from "../layouts/AbstractShape";

const HomeLoader = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const fullText = "clique pour continuer";
  const wordToAnimate = "continuer";
  const wordStartIndex = fullText.indexOf(wordToAnimate);
  
  // Colors from the Matisse museum theme
  const colors = ['#CB181F', '#00339F', '#F5E256', '#FFFFFF'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex(prev => (prev + 1) % wordToAnimate.length);
    }, 200); // Change letter every 200ms
    
    return () => clearInterval(interval);
  }, [wordToAnimate.length]);

  const getLetterStyle = (index: number) => {
    const isInAnimatedWord = index >= wordStartIndex && index < wordStartIndex + wordToAnimate.length;
    
    if (!isInAnimatedWord) {
      return {
        color: '#FFFFFF',
        display: 'inline-block',
      };
    }
    
    const letterIndexInWord = index - wordStartIndex;
    const isCurrentLetter = letterIndexInWord === currentLetterIndex;
    
    return {
      color: isCurrentLetter 
        ? colors[currentLetterIndex % colors.length]
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
          {fullText.split('').map((letter, index) => (
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