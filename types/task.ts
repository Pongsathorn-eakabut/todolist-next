export interface ContextType{
    tasks: ITask[],
    handleChangeTaskName: (taskName: string | '') => void,
    handleDeleteTask: (taskId: number | undefined) => void,
    handleEditTask: (task: ITask) => void,
    handleAddTask: () => void,
    taskName: string,
}

export interface ITask{
    id: number,
    taskName: string
}