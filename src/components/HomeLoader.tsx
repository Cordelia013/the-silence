import AbstractShape from "../layouts/AbstractShape";


function HomeLoader({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="container p-8 bg-gray-100">
      <div className="h-full grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between ">
          <div className="mb-8 bg-blue-200 p-4 rounded">
            <p className="text-center text-lg font-space font-[300] text-[48px] relative bottom-[103px]">
              
            </p>
          </div>
          <div id="loader-left" className="flex flex-row ">
            <img src="/loader.svg" alt="logo" id="loader" className="w-10 h-10 " style={{ marginRight: "16px" }}/>
            <h1 className="text-[48px] font-normal font-space  font-[100]">
              Musée Matisse
            </h1>
          </div>

            <p
            className=" text-lg font-space font-[300] text-[48px] relative bottom-[103px]"
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
