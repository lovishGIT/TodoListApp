import "./App.css";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
    const {todos, addTodo, setCompleteChange, deleteTodo, deleteAllCompleted}= useTodos();
    return (
        <>
            <main className="my-6 space-y-6 w-full flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold text-center">Your Todos</h1>
                <div className="w-full flex flex-col items-center gap-y-2">
                    <AddTodoItem addTodo={addTodo}/>
                    <TodoList todos={todos} setCompleteChange={setCompleteChange} onDelete={deleteTodo}/>
                </div>
                <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted}/>
            </main>
        </>
    );
}

export default App;
