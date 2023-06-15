import { useState } from "react"
import Error from "./Error"

const CreateNewTask = ({getTask}) => {

    const [task,setTask] = useState("")
    const [error,setError] = useState(false)

    const handleChange = (e) =>{
        setTask(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(task === ""){
            setError(true)
            return
        }
        getTask(task)
        setTask("")
        setError(false)

    }
    return (
        <form 
            className='mt-10'
            onSubmit={handleSubmit}
        >
            <label 
                className='flex justify-center mb-2 text-xl font-bold' 
                htmlFor="task"
            >
                Create you task
            </label>
            <input 
                type="text" 
                className='flex mx-auto border-2 border-black w-96'
                id='task'
                value={task}
                onChange={handleChange}
            />

            <button className='flex mx-auto mt-4 bg-teal-800 text-white py-1 px-6 font-bold '>
                Send
            </button>

            {error && <Error>No enviaste ninguna tarea</Error>}
        </form>
    )
}

export default CreateNewTask