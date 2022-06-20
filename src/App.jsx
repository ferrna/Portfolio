import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import MenuBar from "./components/MenuBar";
import Works from "./components/Works";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /* Scroll dataset for html tag scroll value */
  const handleDataSet = () => {
    if (window.scrollY > 250) {
      document.documentElement.dataset.scroll = 100;
    } else {
      document.documentElement.dataset.scroll = 0;
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleDataSet);
    return document.removeEventListener("scroll", handleDataSet);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-blue-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "luna" : "sol"}
      </button>
      <div className="font-inter bg-slate-50 dark:bg-slate-900  min-h-screen scroll-smooth">
        <div className="max-w-4xl px-6 mx-auto">
          <MenuBar />
          <HeroSection />
          <Works />
        </div>
      </div>
    </>
  );
}

export default App;
