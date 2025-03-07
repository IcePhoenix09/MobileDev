
import { useContext } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";
import { Task } from "./ListContext";

export function AddNew() {
    const {setTasks, setIsFocus} = useContext(ListContext);
    const {isDark} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    const addNew = () => {
        console.log("Adding new to tasks list");

        setIsFocus(true);

        setTasks(prevTasks => prevTasks.concat(new Task("", false)));
    }

    return (
        <>
            <button className={theme} onClick={addNew}>Add</button>
        </>
    );
}
