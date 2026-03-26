import { Edit, Plus, RefreshCcw, Trash, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const save = localStorage.getItem("Save Task");
    return save ? JSON.parse(save) : [];
  });
  const [editTask, setEditTask] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const taskRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    localStorage.setItem("Save Task", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
  taskRef.current?.focus()
  }, [editTask])

  function addTask() {
    if (!input.trim()) return;
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          editTask === task.id ? { ...task, text: input } : task,
        ),
      );
      setEditTask(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    }
    setInput("");
    taskRef.current?.focus()
  }

  function changeFunc(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function delFunc(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function editFunc(id: number, text: string) {
    setInput(text);
    setEditTask(id);
  }

  const filteredTask = tasks.filter((task) =>
    filter === "Pending"
      ? !task.completed
      : filter === "Completed"
        ? task.completed
        : true,
  );

  function delAllFunc() {
    if (confirm("Are you want to delete all task")) {
      setTasks([]);
    }
  }

  return (
    <div className="w-full max-w-2xl ">
      <div className="bg-white shadow-md py-5 px-7 rounded-lg space-y-5">
        <h1 className="text-[30px] font-bold">Todo List</h1>
        <div className="flex gap-3">
          <input
            type="text"
            ref={taskRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Add a new task..."
            className="flex-1 rounded-md px-4 py-2 outline outline-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {editTask ? (
            <button
              onClick={addTask}
              className="flex items-center gap-2 bg-blue-600 rounded-md text-white px-4 py-2"
            >
              <RefreshCcw size={18} />
              Update
            </button>
          ) : (
            <button
              onClick={addTask}
              className="flex items-center gap-2 bg-blue-600 rounded-md text-white px-4 py-2"
            >
              <Plus size={18} />
              Add
            </button>
          )}
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex  gap-2 ">
            {["All", "Pending", "Completed"].map((item) => (
              <button
                onClick={() => setFilter(item)}
                key={item}
                className={`rounded-md  px-5 py-2 text-[12px] sm:text-[16px] font-semibold text-gray-800
            ${filter === item ? "bg-blue-600 text-white" : "bg-gray-200"}
            `}
              >
                {item} (
                {item === "All"
                  ? tasks.length
                  : item === "Pending"
                    ? tasks.filter((task) => !task.completed).length
                    : tasks.filter((task) => task.completed).length}
                )
              </button>
            ))}
          </div>

          <button
            onClick={delAllFunc}
            className="rounded-lg text-[12px] sm:text-[16px] bg-red-700 text-white px-3.5 py-2 h-fit "
          >
            Delete All
          </button>
        </div>
        <div className="space-y-3">
          {filteredTask.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-center px-5 py-4 bg-gray-100 rounded-md shadow border border-gray-300"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => changeFunc(task.id)}
              />
              <span
                className={`flex-1 pl-3 text-[18px] ${task.completed ? "line-through text-gray-500" : "none"}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => editFunc(task.id, task.text)}
                title="Edit"
                className="text-blue-700 p-1.5 rounded-sm hover:bg-blue-100 transition-all"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => delFunc(task.id)}
                title="Delete"
                className="text-red-700 p-1.5 rounded-sm hover:bg-red-200 transition-all"
              >
                <Trash size={18} />
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
