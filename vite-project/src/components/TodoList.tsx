import { Todo } from "../types/todo";
import TodoItem from "./todoItem";

interface TodoListProps {
    todos: Todo[];
    setCompleteChange: (id: number, completed: boolean) => void;
    onDelete: (id:number) => void;
}

export default function TodoList({todos, setCompleteChange, onDelete}: TodoListProps) {
    const SortedTodos = todos.sort((a,b)=> {
        if(a.completed == b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })
    return (
        <>
            {SortedTodos.map((todo: Todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        setCompleteChange={setCompleteChange}
                        onDelete={onDelete}
                    />
                );
            })}
            {SortedTodos.length === 0 && <div className="mt-[1%]">No todos to render.</div>}
        </>
    );
}
