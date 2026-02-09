"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    // Start with light mode by default, only use dark if explicitly saved
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    
    // Apply theme to DOM immediately and forcefully
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);
    
    // Force a style recalculation
    root.style.colorScheme = initialTheme;
    
    setMounted(true);
  }, []);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Remove both classes first to ensure clean state
    root.classList.remove("light", "dark");
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Force style recalculation
    root.style.colorScheme = theme;
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
    
    // Force a repaint
    void root.offsetHeight;
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("🔄 Toggling theme:", theme, "→", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
