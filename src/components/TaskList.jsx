import React from "react";

export default function TaskList({ tasks, toggleDone, removeTask, pinTask }) {
  // Gradient background for each category
  function getCardColor(category) {
    const colors = {
      Work: "bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-200",
      Personal: "bg-gradient-to-r from-pink-300 via-red-200 to-yellow-200",
      Study: "bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-200",
      Other: "bg-gradient-to-r from-green-300 via-lime-200 to-emerald-200",
      default: "bg-gradient-to-r from-gray-300 via-slate-200 to-zinc-200",
    };
    return colors[category] || colors.default;
  }

  // Category badge with emoji
  function getCategoryLabel(category) {
    const emojis = {
    Work: "🧑‍💻 Work",
    Personal: "🏡 Personal",
    Study: "📚 Study",
    Other: "🧠 Other",
  };
    return emojis[category] || "📌 Other";
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks
        .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
        .map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center rounded-2xl p-4 shadow-lg transition-all duration-300 ${
              task.done ? "opacity-60 line-through" : ""
            } ${getCardColor(task.category)}`}
          >
            {/* Left Side */}
            <div className="text-left flex-1 pr-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
                <span
                  className={`text-white text-xs font-semibold px-3 py-1 rounded-full shadow ${
                    {
                      Work: "bg-purple-700",
                      Personal: "bg-pink-600",
                      Study: "bg-blue-700",
                      Other: "bg-green-600",
                    }[task.category] || "bg-gray-500"
                  }`}
                >
                  {getCategoryLabel(task.category)}
                </span>
              </div>
              {task.desc && <p className="text-sm text-gray-800">{task.desc}</p>}
            </div>

            {/* Right Side: Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => toggleDone(task.id)}
                className="bg-white/70 text-purple-900 px-3 py-1 rounded-md text-sm hover:bg-white transition"
              >
                {task.done ? "↩ Undo" : "✓ Done"}
              </button>
              <button
                onClick={() => pinTask(task.id)}
                className="bg-white/70 text-yellow-900 px-3 py-1 rounded-md text-sm hover:bg-white transition"
              >
                📌 Pin
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="bg-white/70 text-red-900 px-3 py-1 rounded-md text-sm hover:bg-white transition"
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

