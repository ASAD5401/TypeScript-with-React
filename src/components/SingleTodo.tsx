import React, { useState, useRef, useEffect } from 'react'
import { AiTwotoneEdit } from "react-icons/ai"
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md"
import { Todo } from '../model'
import TodoList from './TodoList'
interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            if (todo.id != id)
                return (
                    todo
                )
        }))
    }
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false)

    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? <input ref={inputRef} className='todos__single--text' type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}></input> :

                todo.isDone ? (
                    <s className='todos__single--text'>{todo.todo}</s>

                ) :
                    (
                        <span className='todos__single--text'>{todo.todo}</span>

                    )

            }

            <div>
                <span className="icon" onClick={() => { if (!edit && todo.isDone === false) { setEdit(true) } }}><AiTwotoneEdit></AiTwotoneEdit></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete></MdDelete></span>

                <span className="icon" onClick={() => handleDone(todo.id)}><MdOutlineDownloadDone ></MdOutlineDownloadDone></span>

            </div>
        </form>
    )
}

export default SingleTodo