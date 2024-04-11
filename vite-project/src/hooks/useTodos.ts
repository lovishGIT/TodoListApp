import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import DummyData from "../data/todos";

export default function useTodos() {
    const [todos, changeTodos]= useState(()=> {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : DummyData;
    });
    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    const setCompleteChange= (id: number, completed: boolean)=> {
        changeTodos((prevTodos)=> (
            prevTodos.map((todo)=> {
                return todo.id === id ? {...todo, completed: completed}: todo;
            })
        ))
    }
    const addTodo= (titleValue: string)=> {
        // const newTodoData= {id: (todos.length+1), title: (titleValue), completed: false};
        const newTodoData= {id: (Date.now()), title: (titleValue), completed: false};
        changeTodos((prevTodos)=> (
            [...prevTodos, newTodoData]
        ))
    }
    const deleteTodo= (id: number)=> {
        changeTodos(prevTodos => prevTodos.filter(todo=> todo.id === id ? false: true))
    }
    const deleteAllCompleted= ()=> {
        changeTodos(prevTodos => prevTodos.filter(todo=> (!todo.completed)))
    }

    return {
        todos,
        setCompleteChange,
        addTodo,
        deleteTodo,
        deleteAllCompleted
    }
}