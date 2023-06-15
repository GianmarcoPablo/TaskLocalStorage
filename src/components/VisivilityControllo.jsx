import React from 'react'

const VisivilityControllo = ({setShowCompleted,showCompleted,taskDelete}) => {

    const handleDelete = () =>{
        if(window.confirm('Are you sure you want to delete all completed tasks?')){
            taskDelete()
        }
    }
  return (
    <div className='flex justify-center my-12 gap-2'>
        <input  
            type="checkbox" 
            onChange={e=>setShowCompleted(!showCompleted)} 
            checked={showCompleted}
        /> 
        <label 
            className='text-xl font-bold' 
            htmlFor="">Show Task done
        </label>

        <button onClick={handleDelete} >
            Clear Completed Task
        </button>
    </div>
    
  )
}

export default VisivilityControllo