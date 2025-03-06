
import { createContext, useState, useMemo, useRef, useEffect } from "react";

export class Task {
    constructor(name, done) {
        this.name = name;
        this.done = done;
    }
}

export const ListContext = createContext();

export function ToDoProvider({ children }) {
    const itemRefs = useRef(new Array())

    const addRef = (element, index) => {
        console.log("length in addRef - " + itemRefs.current.length);
        console.log("Adding element " + tasks[index].name + " with index - " + index);
        console.log("");

        itemRefs.current.splice(index, 1, element)
    }
    
    const [tasks, setTasks] = useState([
        new Task("Task 1", false),
        new Task("Task 2", true),
        new Task("Task 3", false),
    ]);

    const [filter, setFilter] = useState("None");

    useEffect(() => {
        console.log("length - " + itemRefs.current.length);
        const lastindex = itemRefs.current.length - 1;
        itemRefs.current[lastindex].focus();
        console.log(lastindex);
    }, [tasks]);

    const filteredTasks = useMemo(() => {

        if (filter === "Finished") {
            return tasks.map((task, index) => task.done ? index : undefined)
            .filter((task) => task !== undefined);
        } else if (filter === "Not finished") {
            return tasks.map((task, index) => !task.done ? index : undefined)
            .filter((task) => task !== undefined);
        } else {
            return tasks.map((task, index) => index);
        }
    }, [filter, tasks]);

    return (
        <ListContext.Provider value={{ tasks, setTasks, setFilter, filteredTasks, itemRefs, addRef }}>
            {children}
        </ListContext.Provider>
    );
}
