import { Todo } from "../types/todo";

interface TodoProps {
    todo: Todo;
    setCompleteChange: (id: number, completed: boolean) => void;
    onDelete: (id: number)=> void;
}

export default function TodoItem( {todo, setCompleteChange, onDelete}: TodoProps) {
    return (
        <>
            <div key={todo.id}
                className="w-[40%] lg:w-[20%] text-lg border-[1px] border-solid border-black rounded-lg p-[1%] flex gap-6 justify-between items-center hover:bg-slate-100" 
                onClick={()=> setCompleteChange(todo.id, !todo.completed)}
            >
                <button className="flex items-center sm:gap-4">

                    <input className="scale-150" type="checkbox" checked={todo.completed} 
                        onChange={()=> setCompleteChange(todo.id, !todo.completed)} 
                    />
                    <p className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                        {todo.title[0].toUpperCase() + todo.title.slice(1,)}
                    </p>
                    {todo.completed && <span>✔</span>}
                    
                </button>
                <button className="justify-self-end" onClick={()=> onDelete(todo.id)}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}