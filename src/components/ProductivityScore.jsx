export default function ProductivityScore({ tasks }) {
  const completed = tasks.filter((t) => t.done).length;
  return (
    <div className="text-base px-4 py-2 rounded-lg bg-cyan-100 text-teal-700 text-center my-4">
      ✅ <strong>{completed}</strong> / {tasks.length} tasks completed
    </div>
  );
}

