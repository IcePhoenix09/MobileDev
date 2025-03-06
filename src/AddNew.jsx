
import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";
import { Task } from "./ListContext";

export function AddNew() {
    const {tasks, setTasks, lastItem} = useContext(ListContext);
    const {isDark, setTheme} = useContext(ThemeContext);

    const [inputValue, setInputValue] = useState("");

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    const inputRef = useRef();

    const addNew = () => {
        setTasks(prevTasks => prevTasks.concat(new Task("", false)));
    }

    return (
        <>
            <button className={theme} onClick={addNew}>Add</button>
        </>
    );
}
