"use client";
import React, { createContext, useContext, Dispatch } from "react";
import { ITask } from "@/types/task";
import useGetToDoList from "@/app/hooks/useToDoList";

interface Props {
    children: React.ReactNode;
}

interface ContextType {
    tasks: ITask[];
    setTasks: Dispatch<ITask[]>;
    taskToEdit: ITask | undefined;
    setTaskToEdit: Dispatch<ITask>;
    visibleModal: Boolean;
    setVisibleModal: Dispatch<boolean>;
    handleAddTask: (task: ITask) => void;
    handleDeleteTask: (id: number) => void;
    handleUpdateTask: (task: ITask) => void;
}

const TodoListContext = createContext<ContextType | null>(null);

const TodoListProvider = ({ children }: Props) => {
    const {
        visibleModal,
        taskToEdit,
        setVisibleModal,
        setTaskToEdit,
        tasks,
        setTasks,

        handleDeleteTask,
        handleAddTask,
        handleUpdateTask,
    } = useGetToDoList();

    return (
        <TodoListContext.Provider
            value={{
                visibleModal,
                setVisibleModal,
                taskToEdit,
                setTaskToEdit,
                tasks,
                setTasks,

                handleDeleteTask,
                handleAddTask,
                handleUpdateTask,
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
};
export default TodoListProvider;

export const useTodoListContext = () =>
    useContext(TodoListContext) as ContextType;
