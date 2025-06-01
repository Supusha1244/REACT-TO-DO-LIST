import { getEmojiForTask } from "../utils/emojiHelper";

export default function EmojiSuggestion({ text }) {
  return <span>{getEmojiForTask(text)}</span>;
}
