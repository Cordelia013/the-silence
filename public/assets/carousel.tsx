import React, { useState, useEffect, useCallback } from 'react';

import tablo15 from '../assets/tablo-15.jpg';
import tablo16 from '../assets/tablo-16.jpg';
import tablo17 from '../assets/tablo-17.jpg';

const CurvedCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Use provided images or create demo slides
  const slides = images.length > 0 ? images : [
    tablo15,
    tablo16,
    tablo17,
  ];
  
  const totalSlides = slides.length;
  
  // Navigate to next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, totalSlides]);
  
  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, totalSlides]);
  
  // Go to specific slide
  const goToSlide = (index: React.SetStateAction<number>) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [nextSlide, totalSlides]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: { key: string; }) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Calculate slide positions and transformations for curved gallery effect
  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    
    // Distance from center (in pixels)
    const translateX = offset * 220; // Space between slides
    
    // Scale: all cards same size, just slight perspective effect
    const scale = Math.max(0.85, 1 - absOffset * 0.08);
    
    // Rotation: simulate curve perspective
    const rotateY = offset * -12; // Degrees of rotation for curve effect
    
    // Opacity: fade distant slides
    const opacity = absOffset <= 2 ? 1 : 0;
    
    return {
      transform: `
        translateX(${translateX}px) 
        scale(${scale}) 
        rotateY(${rotateY}deg)
      `,
      opacity: opacity,
      zIndex: 5, // All cards on same z-level
    };
  };

  return (
    <div className="curved-carousel-container">
    
      {/* Curved Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <img 
                src={slide} 
                alt={`Slide ${index + 1}`}
                className="slide-image"
                loading="lazy"
              />
              <div className="slide-reflection"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div className="image-counter">
        <span>{currentIndex + 1} / {totalSlides}</span>
      </div>
    </div>
  );
};

// Inject curved carousel styles
const carouselStyles = `
  * {
    box-sizing: border-box;
  }

  .curved-carousel-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
    min-height: 100vh;
  }


  .artwork-info {
    text-align: center;
    margin-bottom: 30px;
    padding: 15px;
   
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .artwork-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .artwork-details {
    font-size: 0.9rem;
    color: #6c757d;
  }

  .carousel-wrapper {
    height: 450px;
    position: relative;
    margin-bottom: 40px;
    overflow: hidden;
    perspective: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .carousel-slide {
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transform-origin: center center;
    background: white;
    border: 3px solid #f8f9fa;
  }

  .carousel-slide.active {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    border: 2px solid #007bff;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .carousel-slide:hover .slide-image {
    transform: scale(1.02);
  }

  .slide-reflection {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    
    pointer-events: none;
  }

  .image-counter {
    text-align: center;
    font-weight: 600;
    color: #495057;
    background: white;
    padding: 12px 24px;
    border-radius: 25px;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid #e9ecef;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .carousel-title {
      font-size: 2rem;
      margin-bottom: 40px;
    }
    
    .carousel-wrapper {
      height: 320px;
    }
    
    .carousel-slide {
      width: 220px;
      height: 220px;
    }
    
    .curved-carousel-container {
      padding: 20px 15px;
    }
  }

  @media (max-width: 480px) {
    .carousel-slide {
      width: 180px;
      height: 180px;
    }
    
    .carousel-wrapper {
      height: 280px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = carouselStyles;
document.head.appendChild(styleSheet);

export default CurvedCarousel;