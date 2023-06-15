import React from 'react'

const TaskRow = ({task,toggleTask}) => {

  return (
    <div className='mt-4 border-b-2 border-black w-3/4 md:w-1/2 mx-auto flex justify-center gap-4'>
        <p className='text-center font-xl font-bold '>{task.name}</p>     
        <input 
            type="checkbox" 
            checked={task.done}
            onChange={()=>toggleTask(task)}
        /> 
    </div>
  )
}

export default TaskRow