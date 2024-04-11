import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: ()=> void;
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completedTodos= todos.filter(todo=> (todo.completed));
    return (
        <div className="text-center">
            {todos.length != 0 && <p>
                {completedTodos.length}/{todos.length} completed.
            </p>}
            {completedTodos.length != 0 && <button className="text-red-600 hover:underline" onClick={deleteAllCompleted}>
                Delete All Completed Todos
            </button>}
        </div>
    );
}
