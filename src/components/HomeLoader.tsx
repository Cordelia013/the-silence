// src/components/HomeLoader.tsx
import AbstractShape from "../layouts/AbstractShape";

function HomeLoader({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="min-h-screen w-full overflow-hidden p-4 sm:p-6 lg:p-8">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col justify-between min-h-[400px] lg:min-h-full">
          <div className="mb-8 bg-blue-200 p-4 rounded">
            <p className="text-center text-lg font-space">
              {/* Contenu */}
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-4">
            <img 
              src="/loader.svg" 
              alt="logo" 
              className="w-10 h-10 flex-shrink-0"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-normal font-space">
              Musée Matisse
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl lg:text-2xl font-space cursor-pointer hover:underline mt-8"
            onClick={onContinue}
          >
            clique pour continuer
          </p>
        </div>
        
        <div className="flex justify-center items-center min-h-[400px] lg:min-h-full">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <AbstractShape />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeLoader;