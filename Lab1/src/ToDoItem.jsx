
import { useCallback, useContext } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";

export function ToDoItem({index}) {
    const {tasks, setTasks, itemRefs} = useContext(ListContext);

    const {isDark} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";
    
    const addRef = useCallback((element) => {
        console.log("Adding ref element <" + tasks[index].name + "> with index - " + index);
        console.log("");

        itemRefs.current.splice(index, 1, element)
    }, [index]);

    return (
        <div key={index}>
            <input className={theme} type="checkbox" id={tasks[index].name} checked={tasks[index].done} onChange={(e) => {
                const newTasks = [...tasks];
                newTasks[index].done = e.target.checked;
                setTasks(newTasks);
            }}/>
            
            <input className={theme} type="text" value={tasks[index].name} placeholder="Enter task" ref={addRef} onChange={(e) => {
                const newTasks = [...tasks];
                newTasks[index].name = e.target.value;
                setTasks(newTasks);
            }
            }/>

            <button className={theme} onClick={() => {
                const newTasks = [...tasks];
                itemRefs.current.splice(index, 1);

                newTasks.splice(index, 1);
                
                setTasks(newTasks);
            }}>Delete</button>
            
        </div>
    );
}
