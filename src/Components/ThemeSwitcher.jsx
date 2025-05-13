import { useEffect } from "react";

export default function ThemeSwitcher({ setThemeIndex }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setThemeIndex((prev) => (prev + 1) % 3);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setThemeIndex]);

  return null;
}
