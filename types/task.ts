export interface ContextType{
    tasks: ITask[],
}

export interface ITask{
    id: number,
    taskName: string
}