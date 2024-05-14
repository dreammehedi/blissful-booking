import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeController() {
  // theme
  const [theme, setTheme] = useState("light");

  // toggle theme icon
  const [toggleThemeIcon, setToggleThemeIcon] = useState(true);

  // handle theme
  const handleTheme = () => {
    setToggleThemeIcon(!toggleThemeIcon);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleTheme}
      className="font-bold my-transition hover:text-white px-3 relative z-[999] py-1 ring-1 ring-primary hover:bg-primary rounded-tr-xl rounded-bl-xl"
    >
      {toggleThemeIcon ? (
        <MdDarkMode className="text-xl"></MdDarkMode>
      ) : (
        <MdLightMode className="text-xl"></MdLightMode>
      )}
    </button>
  );
}

export default ThemeController;
