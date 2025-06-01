import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProductivityScore from "./components/ProductivityScore";
import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleDone = (id) => {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  ));
};

const removeTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const pinTask = (id) => {
  setTasks(prevTasks => {
    const taskToPin = prevTasks.find(task => task.id === id);
    const otherTasks = prevTasks.filter(task => task.id !== id);
    return [taskToPin, ...otherTasks];
  });
};

  return (
  <div
    className={`
      min-h-screen w-full
      transition-colors duration-300
      ${darkMode ? "bg-sky-900 text-black" : "bg-sky-200 text-black"}
    `}
  >
    {/* Toggle button fixed at top right */}
    <div className="fixed top-4 right-4 z-50">
      <ToggleThemeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>

    {/* Main content container */}
    <div className="max-w-lg mx-auto px-8 py-12 font-sans text-center">
      <h1 className="text-4xl mb-6 font-bold">📝 My To-Do List</h1>
      <TaskInput addTask={addTask} />
      <ProductivityScore tasks={tasks} />
      <TaskList
        tasks={tasks}
        toggleDone={toggleDone}
        removeTask={removeTask}
        pinTask={pinTask}
      />
    </div>
  </div>
);

}

export default App;
