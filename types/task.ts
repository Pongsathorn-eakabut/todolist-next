export interface ContextType{
    tasks: ITask[],
    handleChangeTaskName: any,
    handleDeleteTask: any,
    handleEditTask: any,
    handleAddTask: any,
    taskName: string,
}

export interface ITask{
    id: number,
    taskName: string
}