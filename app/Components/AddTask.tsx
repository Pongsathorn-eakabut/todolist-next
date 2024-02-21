import {IoIosAdd} from "react-icons/io";
import { UseToDoListContext } from "../context";



const AddTask = () => {
    const UseToDoList = UseToDoListContext()
    return (
            <div className="flex justify-center items-center w-full flex-row pt-[16px]">
                <input 
                    placeholder="Type To Do List" 
                    className="input w-full max-w-xs border-black border-1" 
                    value={UseToDoList.taskName}
                    onChange={(e)=>UseToDoList.handleChangeTaskName(e.target.value)}
                />
                <button onClick={() =>UseToDoList.handleAddTask()} className="ml-[8px] btn btn-success btn-sm-custom" disabled={UseToDoList.taskName.length === 0}> <IoIosAdd size={15}/> Add Task </button>
            </div>
    )
}

export default AddTask