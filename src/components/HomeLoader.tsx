import AbstractShape from '../layouts/AbstractShape';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HomeLoaderProps {
  onClick: () => void;
}

// Palette de couleurs du projet
const colors = [
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
  '#CB181F',
  '#F5E256',
  '#00339F',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const HomeLoader = ({ onClick }: HomeLoaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setKey((prev) => prev + 1);
      }, 3000); // Répète toutes les 3 secondes

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(false);
    onClick();
  };

  return (
    // Conteneur principal :
    // - Grille responsive : 1 colonne sur mobile, 2 sur écrans moyens et plus.
    // - Plein écran, centré verticalement, avec un fond sombre.
    <div className="grid h-screen w-screen grid-cols-1 items-center text-center text-white md:grid-cols-2">
      {/* Colonne de gauche : Contenu textuel */}
      <div className="flex h-full flex-col items-center justify-evenly gap-12 p-8">
        <div></div>
        {/* Logo et titre */}
        <div className="flex items-center gap-4">
          <img src="/loader.svg" alt="Loader" className="block h-12" />
          <h2 className="m-0 text-5xl font-light leading-none tracking-normal">
            Musée Matisse
          </h2>
        </div>

        {/* Texte de chargement animé avec couleurs différentes pour chaque lettre */}
        <div className="flex select-none p-2 text-5xl font-light leading-none tracking-normal">
          <motion.div
            key={key}
            className="flex cursor-pointer"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onClick={handleClick}
          >
            <span style={{ color: 'white' }}>Cliquer pour&nbsp;</span>
            {' continuer '.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ color: colors[index % colors.length] }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Colonne de droite : Forme abstraite (visible uniquement sur les écrans moyens et plus) */}
      <div className="relative hidden h-full items-center justify-center md:flex">
        <AbstractShape />
      </div>
    </div>
  );
};

export default HomeLoader;
