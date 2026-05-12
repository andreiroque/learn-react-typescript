import { useState } from "react";
import Btn from "./Btn";

const App = () => {
  const [text, setText] = useState<string>("0");
  const [num1, setNum1] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");
  const [waitingForNum1, setWaitingForNum1] = useState<boolean>(true);
  const [waitingForNum2, setWaitingForNum2] = useState<boolean>(false);

  const handleInput = (t: string) => {
    if (waitingForNum1 && operation.length == 0) {
      setText(text.replace(/^0+/, "").concat(t));
    } else if (waitingForNum2) {
      setText(text.replace(/^0+/, "").concat(t));
    }
  };

  const handleOperationClick = (t: string) => {
    setOperation(t);
    setWaitingForNum1(false);
    setWaitingForNum2(true);
    setNum1(parseFloat(text));
    setText("0");
  };

  const handleEqualClick = () => {
    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + parseFloat(text);
        break;
      case "-":
        result = num1 - parseFloat(text);
        break;
      case "*":
        result = num1 * parseFloat(text);
        break;
      case "/":
        result = num1 / parseFloat(text);
        break;
    }

    setNum1(0);
    setOperation("");

    setText(result.toLocaleString());
  };

  const operationStyle =
    "h-16 w-16 rounded-full cursor-pointer hover:opacity-75 bg-amber-500 text-3xl";
  const numStyle =
    "h-16 w-16 rounded-full cursor-pointer hover:opacity-75 bg-neutral-700 text-3xl";

  return (
    <div className="h-screen flex items-center justify-center text-white font-mono ">
      <div className="h-screen w-84 bg-zinc-950">
        <div className="h-1/4 mt-6 flex items-end justify-end">
          <p className="text-8xl">{text}</p>
        </div>
        <div className="h-2/3 flex flex-col gap-5">
          <div className="w-full w- flex justify-center items-center gap-3 h-28">
            <Btn
              click={() => {
                setText("0");
                setNum1(0);
                setOperation("");
              }}
              style="h-16 w-56 rounded-full cursor-pointer hover:opacity-75 bg-zinc-400 text-3xl text-black"
            >
              AC
            </Btn>
            <Btn click={() => handleOperationClick("/")} style={operationStyle}>
              ÷
            </Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn click={() => handleInput("7")} style={numStyle}>
              7
            </Btn>
            <Btn click={() => handleInput("8")} style={numStyle}>
              8
            </Btn>
            <Btn click={() => handleInput("9")} style={numStyle}>
              9
            </Btn>
            <Btn click={() => handleOperationClick("*")} style={operationStyle}>
              ×
            </Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn click={() => handleInput("4")} style={numStyle}>
              4
            </Btn>
            <Btn click={() => handleInput("5")} style={numStyle}>
              5
            </Btn>
            <Btn click={() => handleInput("6")} style={numStyle}>
              6
            </Btn>
            <Btn click={() => handleOperationClick("-")} style={operationStyle}>
              -
            </Btn>
          </div>
          <div className="w-full flex justify-center items-center gap-3 h-26">
            <Btn click={() => handleInput("1")} style={numStyle}>
              1
            </Btn>
            <Btn click={() => handleInput("2")} style={numStyle}>
              2
            </Btn>
            <Btn click={() => handleInput("3")} style={numStyle}>
              3
            </Btn>
            <Btn click={() => handleOperationClick("+")} style={operationStyle}>
              +
            </Btn>
          </div>
          <div className="w-full  flex justify-center items-center gap-3 h-26">
            <Btn
              click={() => handleInput("0")}
              style="h-16 w-36 rounded-full cursor-pointer hover:opacity-75 bg-neutral-700 text-3xl"
            >
              0
            </Btn>
            <Btn click={() => handleInput(".")} style={numStyle}>
              .
            </Btn>
            <Btn click={() => handleEqualClick()} style={operationStyle}>
              =
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
