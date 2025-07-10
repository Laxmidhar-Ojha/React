import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

const TodoForm = ()=> {
    const [task,setTask]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
      e.preventDefault()
      if(task.length==0)return
      
      addTodo({id:Date.now(),task,completed:false})
    }

  return (
    <form onSubmit={add} className="flex">
            <input
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}

export default TodoForm