import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: uuid(),
      title: title.trim(),
      desc: desc.trim(),
      category,
      createdAt: Date.now(),
      done: false,
      pinned: false,
    });

    setTitle("");
    setDesc("");
    setCategory("Work");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md mb-6"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        className="p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-200"
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description..."
        className="p-2 text-base border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black-200"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-100"
      >
        <option value="Work">🧑‍💻 Work</option>
        <option value="Personal">🏡 Personal</option>
        <option value="Study">📚 Study</option>
        <option value="Other">🧠 Other</option>
      </select>
      <button
        type="submit"
        className="bg-purple-700 text-white py-2 px-4 text-base rounded-md hover:bg-purple-900 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}
