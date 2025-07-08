import AbstractShape from '../layouts/AbstractShape';
import { motion } from 'framer-motion';

interface HomeLoaderProps {
  onClick: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Palette de couleurs variées
const colors = [
  '#FF6B6B', // rouge
  '#FFD93D', // jaune
  '#6BCB77', // vert
  '#4D96FF', // bleu
  '#A66CFF', // violet
  '#FF6B81', // rose
  '#FFB26B', // orange
  '#43E6FC', // cyan
  '#F9FAFB', // blanc
];

const letterVariants = {
  hidden: (custom: any) => ({ color: colors[custom % colors.length], opacity: 0.7 }),
  visible: (custom: any) => ({
    color: colors[custom % colors.length],
    opacity: 1,
    transition: { duration: 10 },
  }),
};

const HomeLoader = ({ onClick }: HomeLoaderProps) => {
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

        {/* Texte de chargement animé. La transition est maintenant automatique. */}
        <div className="flex select-none p-2 text-5xl font-light leading-none tracking-normal">
          <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onAnimationComplete={onClick} // Se déclenche quand l'animation du mot est finie
          >
            {'continuer'.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}>
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
