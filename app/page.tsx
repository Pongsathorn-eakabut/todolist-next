"use client";
import AddTask from "./Components/AddTask";
import ToDoList from "./Components/ToDoList";
import ToDoListProvider from "./Context/TodoListContext";

export default function TaskHome() {
	return (
		<ToDoListProvider>
			<main className="flex min-h-screen flex-col items-center justify-start p-[16px] md:p-[32px]">
				<h2 className="text-center underline text-[15px]">TODO LIST</h2>
				<AddTask />
				<ToDoList />
			</main>
		</ToDoListProvider>
	);
}
