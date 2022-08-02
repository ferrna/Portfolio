import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import MenuBar from "./components/MenuBar/MenuBar";
import Skills from "./components/Skills";
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

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-40 right-2 top-2 bg-blue-500 text-lg p-1 rounded-md"
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? "🪔" : "🕶"}
      </button>
      <div className="font-inter bg-slate-50 dark:bg-slate-900 min-h-screen">
        <MenuBar />
        <div className="mx-auto">
          <HeroSection />
          <AboutMe />
          <Skills />
          <Works />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
