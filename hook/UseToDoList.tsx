import {ITask} from "@/types/task"
import { useState } from "react"

const useGetToDoList = () => {
    const [visibleModal,setVisibleModal] = useState<Boolean>(false)
    const [taskToEdit,setTaskToEdit] = useState({
        id: 0,
        taskName: ""
    })
    const [taskName, setTaskName] = useState<string>('')
    const [tasks,setTasks] = useState<ITask[]>([
        {
            id: 1,
            taskName: 'ToDo 1'
        }
    ])


    return {visibleModal,taskToEdit,setVisibleModal,setTaskToEdit,tasks,setTasks,taskName, setTaskName}
}

export default useGetToDoList