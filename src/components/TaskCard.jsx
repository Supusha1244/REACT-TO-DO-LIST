import React, { useMemo } from "react";
import EmojiSuggestion from "./EmojiSuggestion";

export default function TaskCard({ task, toggleDone, removeTask, pinTask }) {
  const colorfulThemes = [
    "from-pink-300 to-pink-100 text-gray-800",
    "from-purple-300 to-pink-200 text-gray-800",
    "from-pink-200 to-blue-200 text-gray-800",
    "from-green-200 to-blue-200 text-gray-800",
    "from-yellow-100 to-orange-200 text-gray-800",
    "from-blue-200 to-blue-300 text-gray-800",
  ];

  const colorClass = useMemo(() => {
    const seed = [...task.title].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colorfulThemes[seed % colorfulThemes.length];
  }, [task.title]);

  const getCategoryEmoji = (category) => {
    switch (category?.toLowerCase()) {
      case "work":
        return "🧑‍💻";
      case "personal":
        return "🏡";
      case "study":
        return "📚";
      case "other":
        return "🧠";
      default:
        return "📝";
    }
  };

  return (
    <div
      className={`rounded-xl p-4 my-3 transition-transform duration-200 hover:-translate-y-1 shadow-md hover:shadow-lg
        bg-gradient-to-br ${colorClass} ${task.done ? "opacity-60 line-through" : ""}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mr-2 flex-1">
          {task.title} <EmojiSuggestion text={task.title + " " + task.desc} />
        </h3>
        <span className="text-xs font-semibold uppercase rounded-full bg-white/20 px-3 py-1 text-white flex items-center gap-1">
          {getCategoryEmoji(task.category)} {task.category}
        </span>
      </div>
      <p className="text-sm text-white/90 my-2">{task.desc}</p>
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => toggleDone(task.id)}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm"
        >
          {task.done ? "Undo" : "✓ Done"}
        </button>
        <button
          onClick={() => pinTask(task.id)}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm"
        >
          📌 Pin
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm"
        >
          🗑 Remove
        </button>
      </div>
    </div>
  );
}
