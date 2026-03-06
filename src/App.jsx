import { useState } from "react";
import kpoli from "./assets/kpoli.png";
import balen from "./assets/balen.png";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [balenVote, setBalenVote] = useState(0);

  const moveButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    setPosition({ x, y });
  };

  const handleBalenVote = () => {
    setBalenVote((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-700 flex flex-col justify-center items-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 md:mb-12 text-center">Vote Your Favorite</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-12 justify-around items-center w-full">
        <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
          <div>
            <img
              src={balen}
              alt="balen image"
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-lg shadow-lg bg-gray-900 cursor-pointer hover:opacity-80 transition"
              onClick={handleBalenVote}
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleBalenVote}
              className="bg-blue-600 cursor-pointer transition active:scale-105 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-lg mb-2 text-sm md:text-base"
            >
              Vote Balen
            </button>
            <p className="text-white text-lg md:text-2xl lg:text-3xl font-bold">{balenVote}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
          <div>
            <img
              src={kpoli}
              alt="kpoli image"
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
            />
          </div>
          <div className="text-center">
            <button
              onMouseEnter={moveButton}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-lg mb-2 text-sm md:text-base transition"
            >
              Vote Chor KP
            </button>
            <p className="text-white text-lg md:text-2xl lg:text-3xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
