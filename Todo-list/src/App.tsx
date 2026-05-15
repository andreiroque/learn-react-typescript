import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (task.length > 0) {
      setTodo([...todo, task]);
    }
    setTask("");
  };

  const handleTaskDone = (task: string) => {
    setTodo(todo.filter((t) => t !== task));
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-96 w-72 shadow-xl/30 rounded-xl p-5 text-mono flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-4xl text-bold">Todo List</h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter a task"
              className="border border-slate-500 rounded-md p-1"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button
              onClick={() => handleAddTask()}
              className="bg-slate-900 py-1 px-2 rounded-md text-white cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
        <div className="p-5">
          <ul className="list-disc">
            {todo.map((t) => (
              <li key={t}>
                {t}{" "}
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  onChange={() => handleTaskDone(t)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
