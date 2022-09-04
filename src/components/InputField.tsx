import React from 'react'
import "./styles.css"
interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}
export const InputField:React.FC<Props> = ({todo,setTodo}) => {
  return (
    <form className='input'>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="input" placeholder='Enter A Task' className='input__box'></input>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}
