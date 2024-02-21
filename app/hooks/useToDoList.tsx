import { ITask } from "@/types/task";
import { useState } from "react";

const TempData: ITask[] = [
	{
		id: 1,
		taskName: "ToDo 1",
	},
];

const useGetToDoList = () => {
	const [visibleModal, setVisibleModal] = useState<Boolean>(false);
	const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>();
	const [tasks, setTasks] = useState<ITask[]>(TempData);

	const handleDeleteTask = (taskId: number | undefined) => {
		if (!taskId) return;
		setTasks((task) => task.filter((task) => task.id !== taskId));
	};

	const handleUpdateTask = (taskEdit: ITask) => {
		const taskIndex = tasks.findIndex(({ id }) => id === taskEdit.id);
		if (taskIndex !== -1) {
			tasks[taskIndex] = taskEdit;
			setTasks(tasks);
			setVisibleModal(false);
		}
	};

	const handleAddTask = (task: ITask) => {
		setTasks((tasks) => [
			...tasks,
			{
				id: tasks.length + 1,
				taskName: task.taskName,
			},
		]);
	};

	return {
		visibleModal,
		setVisibleModal,
		taskToEdit,
		setTaskToEdit,
		tasks,
		setTasks,
		handleUpdateTask,
		handleDeleteTask,
		handleAddTask,
	};
};

export default useGetToDoList;
