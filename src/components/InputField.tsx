import React,{useRef} from 'react'
import "./styles.css"
interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent)=>void
}
export const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur()
      }} className='input'>
        <input ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} type="input" placeholder='Enter A Task' className='input__box'></input>
        <button  className='input_submit' type='submit'>Go</button>
    </form>
  )
}
