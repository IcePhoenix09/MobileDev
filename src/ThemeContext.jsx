
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setTheme] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDark, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
