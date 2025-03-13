
import { createContext, useState, useMemo, useRef} from "react";

export class Task {
    constructor(name, done) {
        this.name = name;
        this.done = done;
    }
}

export const ListContext = createContext();

export function ToDoProvider({ children }) {
    // reference to all the input field in the list
    const itemRefs = useRef(new Array())
    
    const [tasks, setTasks] = useState([
        new Task("Task 1", false),
        new Task("Task 2", true),
        new Task("Task 3", false),
    ]);

    const [isFocus, setIsFocus] = useState(false); // if the last element should be focused

    const [filter, setFilter] = useState("None");

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
        <ListContext.Provider value={{ tasks, setTasks, setFilter, filteredTasks, itemRefs, isFocus, setIsFocus }}>
            {children}
        </ListContext.Provider>
    );
}
