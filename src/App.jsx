import { useState, useEffect } from "react";
import "./App.css";
import TodoSection from "./components/TodoSection";
import TaskPicker from "./components/TaskPicker";

const SECTIONS = ["Pessoal", "Mercadinho", "BOD", "Insight"];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : {
          Pessoal: [],
          Mercadinho: [],
          BOD: [],
          Insight: [],
        };
  });
  const [pickedTask, setPickedTask] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (section, text) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      urgent: false,
    };

    setTasks((prev) => ({
      ...prev,
      [section]: [...prev[section], newTask],
    }));
  };

  const toggleTask = (section, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const toggleUrgent = (section, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].map((task) =>
        task.id === taskId ? { ...task, urgent: !task.urgent } : task
      ),
    }));
  };

  const removeTask = (section, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].filter((task) => task.id !== taskId),
    }));
  };

  const clearCompletedTasks = () => {
    setTasks((prev) => {
      const newTasks = {};
      for (const section of SECTIONS) {
        newTasks[section] = prev[section].filter((task) => !task.completed);
      }
      return newTasks;
    });
  };

  const getAllOpenTasks = () => {
    const openTasks = [];
    for (const section of SECTIONS) {
      tasks[section].forEach((task) => {
        if (!task.completed) {
          openTasks.push({ ...task, section });
        }
      });
    }
    return openTasks;
  };

  const pickRandomTask = () => {
    const openTasks = getAllOpenTasks();
    if (openTasks.length === 0) {
      setPickedTask(null);
      return;
    }

    // Create weighted array (urgent tasks have weight 2)
    const weightedTasks = [];
    openTasks.forEach((task) => {
      weightedTasks.push(task);
      if (task.urgent) {
        weightedTasks.push(task); // Add urgent tasks twice for weight 2
      }
    });

    const randomIndex = Math.floor(Math.random() * weightedTasks.length);
    setPickedTask(weightedTasks[randomIndex]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>TODO App</h1>
        <div className="header-controls">
          <TaskPicker onPick={pickRandomTask} pickedTask={pickedTask} />
          <button className="clear-completed-btn" onClick={clearCompletedTasks}>
            Clear Completed
          </button>
        </div>
      </header>

      <main className="app-main">
        {SECTIONS.map((section) => (
          <TodoSection
            key={section}
            title={section}
            tasks={tasks[section]}
            onAddTask={(text) => addTask(section, text)}
            onToggleTask={(taskId) => toggleTask(section, taskId)}
            onToggleUrgent={(taskId) => toggleUrgent(section, taskId)}
            onRemoveTask={(taskId) => removeTask(section, taskId)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
