import React,{createContext,useContext,useState} from 'react'
import { ContextType } from '@/types/task';

export const ToDoListContext = createContext<ContextType | undefined>(undefined);

export function UseToDoListContext(){
    const funcToDoListConText = useContext(ToDoListContext)
    if(funcToDoListConText === undefined){
        throw new Error('UseToDoListContext only use with ToDoListContext')
    }
    return funcToDoListConText
}