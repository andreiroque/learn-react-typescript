import { useState } from "react";
import Btn from "./Btn";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10 font-mono">
      <h1 className="text-5xl">Simple counter</h1>
      <div className="flex flex-col gap-5">
        <p className="font-[1.5rem] text-center">Counter: {count}</p>
        <div className="flex gap-5">
          <Btn
            click={() => setCount(count + 1)}
            style="border rounded-md px-5 py-3 cursor-pointer"
          >
            Add
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default App;
