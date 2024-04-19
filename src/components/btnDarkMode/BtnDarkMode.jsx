import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";

import darkIcon from "./icons/moon.svg";
import lightIcon from "./icons/sun.svg";
import "./style.css";
import detectDarkMode from "../../utils/detectDarkMode";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  },[setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img 
      className="dark-mode-btn__icon" 
      src={lightIcon} 
      alt="Light mode" />
      <img className="dark-mode-btn__icon" 
      src={darkIcon} 
      alt="Dark mode" />
    </button>
  );
};

export default BtnDarkMode;
