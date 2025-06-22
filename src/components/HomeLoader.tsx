// import AbstractShape from "../layouts/AbstractShape";

import AbstractShape from "../layouts/AbstractShape";

// function HomeLoader({ onContinue }: { onContinue: () => void }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-2">
//       {/* Container responsive */}
//       <div className="flex flex-row items-between">
//         {/* Left: Texte/logo */}
//         <div className="">
//           <div className="flex flex-row items-center gap-6">
//             <img src="/loader.svg" alt="logo" className="w-10 h-10" />
//             <h1 className="text-2xl font-normal font-space text-center">
//               Musée Matisse
//             </h1>
//           </div>

//           <p
//             className="text-center text-lg font-space"
//             onClick={onContinue}
//             style={{ cursor: "pointer" }}
//           >
//             clique pour continuer
//           </p>
//         </div>

//         {/* Right: Illustration */}
//         <div className="flex-1 flex items-center justify-center w-full ">
//           <AbstractShape />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default HomeLoader;

function HomeLoader({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="w-full h-screen p-8 bg-gray-100">
      <div className="h-full grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between items-center">
          <div className="mb-8 bg-blue-200 p-4 rounded">
            <p className="text-center text-lg font-space font-[300] text-[48px] relative bottom-[103px]">
              
            </p>
          </div>
            <div className="mb-8 bg-blue-200 rounded flex flex-row items-center ">
            <img src="/loader.svg" alt="logo" className="w-10 h-10 " />
            <h1 className="text-2xl font-normal font-space text-center  font-[300]">
              Musée Matisse
            </h1>
            </div>
            <p
            className="text-center text-lg font-space font-[300] text-[48px] relative bottom-[103px]"
            onClick={onContinue}
            style={{ cursor: "pointer" }}
            >
            clique pour continuer
            </p>
          </div>
        <div className="flex justify-center items-center ">
        <AbstractShape />
        </div>
      </div>
    </div>
  );
}
export default HomeLoader;
