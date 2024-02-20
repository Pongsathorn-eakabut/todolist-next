import {ITask} from "@/types/task"
import { IoIosRemove } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { useState,useContext } from "react";
import { UseToDoListContext } from "../context";

const ToDoList = () => {
    const UseToDoList = UseToDoListContext()
    const [visibleModal,setVisibleModal] = useState<Boolean>(false)
    const [taskToEdit,setTaskToEdit] = useState()
    const editTask = (task:any) => {
        setTaskToEdit(task)
        setVisibleModal(true)
    }
    const taskDataChange= (taskName: any) => {
        let temp = {...taskToEdit}
        temp.taskName = taskName
        setTaskToEdit(temp)
    }
    const submitEdit = () => {
        UseToDoList.handleEditTask(taskToEdit)
        setVisibleModal(false)
    }

    return (
        <div className="overflow-x-auto mt-[16px] w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-[50%]">Task</th>
                        <th className="w-[50%]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {UseToDoList.tasks?.map((task) =>(
                        <tr key={task.id}>
                            <td className="">{task.taskName}</td>
                            <td className="">
                                <button onClick={()=>UseToDoList.handleDeleteTask(task.id)} className="btn btn-sm-custom btn-error"> <IoIosRemove size={15}/></button>
                                <button onClick={()=>editTask(task)} className="ml-[8px] btn btn-sm-custom btn-warning"> <MdModeEdit size={15}/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {visibleModal && (
                <dialog id="my_modal_1" className={visibleModal?'modal modal-open':''}>
                    <div className="modal-box flex flex-col">
                        <div className="">
                            <input 
                                placeholder="Type To Do List" 
                                className="input w-full border-black border-1" 
                                value={taskToEdit.taskName}
                                onChange={(e)=>taskDataChange(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-row justify-end mt-[32px]">
                            <button className="btn btn-primary mr-[8px] btn-sm-custom" disabled={taskToEdit.taskName=== ""} onClick={()=>submitEdit()}>Save</button>
                            <button className="btn btn-sm-custom" onClick={()=>setVisibleModal(false)}>Close</button>
                        </div>
                    </div>
                    <form method="dialog" onSubmit={()=>setVisibleModal(false)} className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            )}
            </div>
    )
}

export default ToDoList