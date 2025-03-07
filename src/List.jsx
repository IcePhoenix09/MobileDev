
import { useContext, useEffect } from "react";

import { ListContext } from "./ListContext";

import { ToDoItem } from "./ToDoItem";

export function List() {
    const {filteredTasks, isFocus, setIsFocus, tasks, itemRefs} = useContext(ListContext);

    // for focusing the last element when a new element is added
    useEffect(() => {
        if (isFocus) {
            if (filteredTasks === undefined) {
                console.log("filteredTasks is undefined"); 
            } 
            if (filteredTasks.length === 0) {
                console.log("filteredTasks is empty");
            }
    
            const lastindex = filteredTasks[filteredTasks.length - 1];
            if (tasks[lastindex] !== undefined) {
                console.log("Focusing element <"+ tasks[lastindex].name + "> with index - " + lastindex);
                itemRefs.current[lastindex].focus();
            } else {
                console.log("Can't find element to focus with index - " + lastindex);
            }


            setIsFocus(false);
        }
    }, [tasks]);

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
