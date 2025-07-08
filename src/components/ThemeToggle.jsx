import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect( () => {
    const storedTheme = localStorage.getItem("theme");
    if( storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
    } else {
        setIsDarkMode(false);
         document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if(isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false)
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true)
    }
  }

  return (
    <><button onClick={toggleTheme}
          className="bg-red-500 text-white p-4"
          aria-label="Toggle theme">
          {isDarkMode ? (
              <><p>click me</p><Sun className="h-6 w-6 text-yellow-300" /></>
          ) : (
              <Moon className="h-6 w-6 text-blue-900" />
          )}{" "}
      </button><div className="min-h-screen bg-background text-foreground">
              <button className="bg-card text-primary px-4 py-2 rounded">
                  Toggle
              </button>
          </div></>

  );
};
