 import { useState,useEffect } from 'react'
import CreateNewTask from './components/CreateNewTask'
import TaskDiv from './components/TaskDiv'
import VisivilityControllo from './components/VisivilityControllo'

const App = () => {

    const [itemsTask,setItemsTask] = useState([])
    const [showCompleted,setShowCompleted] = useState(false)

    const getTask = (taskName) =>{
        if(!itemsTask.find(task=>task.name === taskName)){
            setItemsTask([...itemsTask,{name: taskName, done: false}])
            return
        }
    }

    const toggleTask = (task) =>{
        setItemsTask(
            itemsTask.map(t=>(t.name === task.name) ? {...t, done: !t.done} : t)
        )
    }

    useEffect(() => {
        let data = localStorage.getItem("task");
        if (data) {
            setItemsTask(JSON.parse(data));
        }
      }, []);

      const taskDelete = () =>{
        setItemsTask(itemsTask.filter(task=>!task.done))
        setShowCompleted(false)
      }
    
      useEffect(() => {
        localStorage.setItem("task", JSON.stringify(itemsTask));
      }, [itemsTask]);

  return (
    <div className='container mx-auto bg-gray-50 pb-5 mt-8'>
        <div>
            <h1 className='text-center text-5xl text-teal-600 font-black pt-8'>Task Creator</h1>
            <CreateNewTask
                getTask={getTask}
            />

            <TaskDiv
                itemsTask={itemsTask}
                toggleTask={toggleTask}
            />
            
            <VisivilityControllo
                showCompleted={showCompleted}
                setShowCompleted={setShowCompleted}
                taskDelete={taskDelete}
            />
            {
                showCompleted 
                && <TaskDiv
                itemsTask={itemsTask}
                toggleTask={toggleTask}
                showCompleted={showCompleted}
            />
            }
        </div>
    </div>
  )
}
export default App