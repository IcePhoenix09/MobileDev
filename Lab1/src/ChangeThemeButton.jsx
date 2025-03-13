
import { useContext, useEffect } from "react";

import { ThemeContext } from "./ThemeContext";

export function ChangeThemeButton() {
    const {isDark, setTheme} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    useEffect(() => {
        console.log(isDark);
        document.body.className = isDark ? "dark-theme-background" : "light-theme-background";
        }, [isDark]);

    return (
        <>
            <button className={theme} title="Change theme" onClick={() => {
                setTheme(!isDark);
            }
            }>ChangeTheme</button>
        </>
    );
}
