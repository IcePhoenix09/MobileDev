
import { useContext } from "react";

import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";

export function ToDoItem({index, ref}) {
    const {tasks, setTasks, addRef, itemRefs} = useContext(ListContext);

    const {isDark} = useContext(ThemeContext);

    const theme = isDark ? "dark-theme-item" : "light-theme-item";

    return (
        <div key={index}>
            <input className={theme} type="checkbox" id={tasks[index].name} checked={tasks[index].done} onChange={(e) => {
                const newTasks = [...tasks];
                newTasks[index].done = e.target.checked;
                setTasks(newTasks);
            }}/>
            
            <input className={theme} type="text" value={tasks[index].name} placeholder="Enter task" ref={(element) => addRef(element, index)} onChange={(e) => {
                const newTasks = [...tasks];
                newTasks[index].name = e.target.value;
                setTasks(newTasks);
            }
            }/>

            <button className={theme} onClick={() => {
                const newTasks = [...tasks];
                itemRefs.current.length = 0;
                console.log("length in button - " + itemRefs.current.length);
                newTasks.splice(index, 1);

                
                for (let i = 0; i < newTasks.length; i++) {
                    console.log("Element -" + i + " - " + newTasks[i].name);
                }
                
                setTasks(newTasks);
            }}>Delete</button>
            
        </div>
    );
}
