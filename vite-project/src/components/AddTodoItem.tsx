import { ChangeEvent, useState } from "react";

interface AddTodoProps {
    addTodo: (title: string)=> void;
}
export default function AddTodoItem({ addTodo }: AddTodoProps) {
    const [titleValue, setTitleValue]= useState('');
    const handleTitle= (e: ChangeEvent<HTMLInputElement>)=> {
        setTitleValue(e.target.value.trim());
    }
    return (
        <div className="w-[40%] lg:w-[20%] mb-2 flex items-center justify-between">
            <input
                type="text"
                name="title"
                placeholder="Add a Todo"
                className="w-full p-2 border-[1px] border-solid border-black rounded-l-lg"
                defaultValue={''}
                onChange={(e) => handleTitle(e)}
            />
            <button
                className="p-2 scale-105 rounded-r-lg bg-black text-white hover:bg-slate-800"
                disabled={titleValue.trim().length > 1 ? false:true}
                onClick={() => addTodo(titleValue.trim())}
            >
                Add
            </button>
        </div>
    );
}
