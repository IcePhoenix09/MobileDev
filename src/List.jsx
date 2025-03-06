
import { useContext } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";

import { ToDoItem } from "./ToDoItem";

export function List() {
    const {tasks, setTasks, filteredTasks, itemRefs} = useContext(ListContext);

    const {isDark} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    return (
        <>
        <h1>Tasks</h1>
            <div>
                {filteredTasks.map((index) => (
                    <ToDoItem key={index} index={index}/>
                ))}
            </div>
        </>
    );
}
