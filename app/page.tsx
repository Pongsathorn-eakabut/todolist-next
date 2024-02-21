"use client"
import AddTask from "./Components/AddTask";
import ToDoList from "./Components/ToDoList";
import { ITask } from "@/types/task";
import { useState } from "react";
import { ToDoListContext } from "./context";
import useGetToDoList from "../hook/UseToDoList"


export default function TaskHome() {
  const {tasks,setTasks,taskName, setTaskName} = useGetToDoList()
  const handleChangeTaskName = (taskName : string) => {
      setTaskName(taskName)
  }
  const handleDeleteTask = (taskId: number | undefined) => {
    let temp = tasks
    temp = temp.filter((task:ITask) => task.id !== taskId)
    setTasks(temp)
  }

  const handleEditTask = (task:ITask) => {
      const taskDataEdit =  task;
      const index = tasks.findIndex((task:ITask)=>task.id === taskDataEdit.id)
      let temp = tasks
      if(index !== -1){
        temp[index] = taskDataEdit
        setTasks(temp)
      }
  }

  const handleAddTask = () => {
      if (!taskName) return
      const newTask = {
        id: tasks.length?tasks[tasks.length-1].id + 1 : 1,
        taskName: taskName
      }
      let temp = tasks
      temp.push(newTask)
      setTasks(temp)
      setTaskName('')
  }
  return (
    <ToDoListContext.Provider
      value={{
        tasks,
        handleChangeTaskName,
        handleDeleteTask,
        handleEditTask,
        handleAddTask,
        taskName
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-start p-[16px] md:p-[32px]">
        <h2 className="text-center underline text-[15px]">
          TODO LIST
        </h2>
        <AddTask/>
        <ToDoList/>
      </main>
    </ToDoListContext.Provider>
      
  );
}

