import { useState } from "react";
import Btn from "./Btn";

const App = () => {
  const [text, setText] = useState<string>("0");

  return (
    <div className="h-screen flex items-center justify-center text-white font-mono ">
      <div className="h-screen w-84 bg-zinc-950">
        <div className="h-1/4 mt-6 flex items-end justify-end">
          <p className="text-8xl">{text}</p>
        </div>
        <div className="h-2/3 flex flex-col gap-5">
          <div className="w-full w- flex justify-center items-center gap-3 h-28">
            <Btn style="h-16 w-56 rounded-full bg-zinc-400 text-3xl text-black">
              AC
            </Btn>
            <Btn style="h-16 w-16 rounded-full bg-amber-500 text-3xl">÷</Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">7</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">8</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">9</Btn>
            <Btn style="h-16 w-16 rounded-full bg-amber-500 text-3xl">×</Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">4</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">5</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">6</Btn>
            <Btn style="h-16 w-16 rounded-full bg-amber-500 text-3xl">-</Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">1</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">2</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">3</Btn>
            <Btn style="h-16 w-16 rounded-full bg-amber-500 text-3xl">+</Btn>
          </div>
          <div className="w-full  flex justify-center items-center gap-3 h-26">
            <Btn style="h-16 w-36 rounded-full bg-neutral-700 text-3xl">0</Btn>
            <Btn style="h-16 w-16 rounded-full bg-neutral-700 text-3xl">.</Btn>
            <Btn style="h-16 w-16 rounded-full bg-amber-500 text-3xl">=</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
