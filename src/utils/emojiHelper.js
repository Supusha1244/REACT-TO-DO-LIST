// utils/emojiHelper.js
export const getEmojiForTask = (text) => {
  if (text.includes("work")) return "💼";
  if (text.includes("food")) return "🍔";
  if (text.includes("exercise")) return "🏃";
  return "📝";
};
