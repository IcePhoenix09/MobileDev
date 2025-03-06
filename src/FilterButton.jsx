
import { useContext } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";

export function FilterButton() {
    const {setFilter} = useContext(ListContext);

    const {isDark} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    return (
        <>
            <p>Filter</p>
            <input className={theme} type="radio" id="html" name="fav_language" onChange={
                () => {
                    setFilter("None");
                }
            }></input>
            <label className={theme} htmlFor="html">None</label>

            <input className={theme} type="radio" id="css" name="fav_language"
                    onChange={() => {
                        setFilter("Finished");
                    }}></input>
            <label className={theme}  htmlFor="css">Finished</label>

            <input className={theme} type="radio" id="javascript" name="fav_language"
                    onChange={() => {
                        setFilter("Not finished");
                    }}></input>
            <label className={theme}  htmlFor="javascript">Not finished</label>
        </>
    );
}
