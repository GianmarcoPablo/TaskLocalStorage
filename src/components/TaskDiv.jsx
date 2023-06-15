import TaskRow from "./TaskRow"

const TaskDiv = ({itemsTask,toggleTask, showCompleted = false}) => {

    const taskTableDiv = (dontValue) =>{
        return (
            itemsTask
            .filter(task=>task.done === dontValue  )
            .map(task=>(
                <TaskRow
                    task={task}
                    key={task.name}
                    toggleTask={toggleTask}
                />
            ))
        )
    }
  return (
        <div className='mt-10'>
                {
                    taskTableDiv(showCompleted)
                }
            </div>
  )
}

export default TaskDiv