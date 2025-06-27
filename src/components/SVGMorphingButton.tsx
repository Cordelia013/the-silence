import * as React from 'react';
import { motion } from 'framer-motion';

const SVGMorphingButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Animation variants pour les différents éléments
  const containerVariants = {
    state1: { height: 90 },
    state2: { height: 90 }
  };

  const redRectVariants = {
    state1: { y: 0, width: 285, height: 71 },
    state2: { y: 2, width: 285, height: 71 }
  };

  const blueSquareVariants = {
    state1: { 
      x: 0, 
      y: 28, 
      width: 43, 
      height: 43,
      rotate: 0
    },
    state2: { 
      x:226, // centré horizontalement
      y: 19.5, // centré verticalement
      width: 43, 
      height: 43, // s'assurer que height est bien défini
      rotate: 45.5459
    }
  };

  const yellowRectVariants = {
    state1: { 
      x: 29, 
      y: 0, 
      width: 43, 
      height: 43, // s'assurer que height est bien défini
      opacity: 1
    },
    state2: { 
      x: 181.001, 
      y: 2, 
      width: 24, 
      height: 24, // s'assurer que height est bien défini
      opacity: 1
    }
  };

  const blueBottomVariants = {
    state1: { 
      x: 187, 
      y: 49, 
      width: 98, 
      height: 22 // s'assurer que height est bien défini
    },
    state2: { 
      x: 0.000488281, 
      y: 51, 
      width: 98, 
      height: 22 // s'assurer que height est bien défini
    }
  };

  const yellowCircleVariants = {
    state1: { 
      opacity: 0,
      scale: 0,
      x: 22.1183,
      y: 20.1183,
      rotate: 0
    },
    state2: { 
      opacity: 1,
      scale: 1,
      x: 22.1183,
      y: 20.1183,
      rotate: 74.6704
    }
  };

  const yellowArcVariants = {
    state1: { opacity: 1, scale: 1 },
    state2: { opacity: 0, scale: 0.5 }
  };

  const organicPathVariants = {
    state1: { 
      opacity: 1,
      pathLength: 1,
      d: "M108.963 58.4155C93.8013 64.8425 86.0034 69.9842 82.1046 70.8411C78.2058 71.698 184.575 111.267 186.939 70.8411C187.076 68.5024 186.939 64.8425 186.939 64.8425C188.672 49.4176 144.052 77.2681 159.214 58.4155C181.382 30.8518 120.538 53.5091 108.963 58.4155Z"
    },
    state2: { 
      opacity: 1,
      pathLength: 1,
      d: "M237.005 38.0002C240.996 43.582 244.523 55.4968 245.023 55.9968C245.523 56.4969 255.284 45.7199 262.505 38.4998C265.005 35.9999 262.005 27.9999 262.005 27.9999C247.505 20.4999 251.296 41.9037 247.001 29.4957C242.502 16.4999 232.001 31 237.005 38.0002Z"
    }
  };

  const textVariants = {
    state1: { y: 0 },
    state2: { y: 2 }
  };

  const buttonVariants = {
    hover: { scale: 1.02, y: -4 },
    tap: { scale: 0.98 }
  };

  const currentState = isHovered ? 2 : 1;

  return (
    <motion.div
      className="group cursor-pointer"
          variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
           
       
    >
      <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 p-6 ${
        isHovered 
          ? 'border-blue-400 shadow-2xl' 
          : 'border-gray-200 shadow-lg'
      }`}>
        <motion.svg 
          width="285" 
          viewBox="0 0 285 90"
          className="border border-gray-200 rounded-lg"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          variants={containerVariants}
          animate={`state${currentState}`}
          transition={{ duration: 2, ease: "easeInOut" }}
            
        >
          {/* Rectangle rouge principal */}
          <motion.rect 
            width="285" 
            height="71" 
            fill="#CB181F"
            variants={redRectVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Rectangle bleu qui se transforme et tourne */}
          <motion.rect 
            width="43" 
            height="43" 
            fill="#00339F"
            variants={blueSquareVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "21.5px 21.5px" }}
          />
          
          {/* Rectangle jaune qui change de taille */}
          <motion.rect 
            fill="#F5E256"
            variants={yellowRectVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Rectangle bleu du bas qui se déplace */}
          <motion.rect 
            width="98" 
            height="22" 
            fill="#00339F"
            variants={blueBottomVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Arc jaune (état 1) */}
          <motion.path 
            d="M285 18C285 15.6362 284.534 13.2956 283.63 11.1117C282.725 8.92784 281.399 6.94353 279.728 5.27208C278.056 3.60062 276.072 2.27475 273.888 1.37017C271.704 0.465584 269.364 -1.03325e-07 267 0V18H285Z" 
            fill="#F5E256"
            variants={yellowArcVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Cercle jaune (état 2) */}
          <motion.circle 
            cx="10.1183" 
            cy="5.1183" 
            r="18" 
            fill="#F5E256"
            variants={yellowCircleVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "22.1183px 20.1183px" }}
          />
          
          {/* Forme organique qui se transforme */}
          <motion.path 
            fill="#F5E256" 
            stroke="#F5E256"
            variants={organicPathVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Texte */}
          <motion.g
            variants={textVariants}
            animate={`state${currentState}`}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <text x="89.408" y="43.336" fill="white" fontSize="24" fontFamily="space grotesk, sans-serif">
              Je réserve
            </text>
          </motion.g>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default SVGMorphingButton;