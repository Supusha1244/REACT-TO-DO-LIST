// components/ToggleThemeButton.jsx
import { useEffect } from "react";

const ToggleThemeButton = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="
        mb-6 
        px-5 py-2 
        rounded-lg 
        bg-sky-600 
        text-white 
        hover:bg-sky-700 
        focus:outline-none 
        focus:ring-2 focus:ring-sky-300 
        transition-colors duration-300
        shadow
      "
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ToggleThemeButton;

