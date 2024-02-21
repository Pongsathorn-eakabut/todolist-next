import { ITask } from "@/types/task";
import { IoIosRemove } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { useTodoListContext } from "../Context/TodoListContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ToDoList = () => {
	const {
		tasks,
		handleDeleteTask,
		visibleModal,
		taskToEdit,
		setTaskToEdit,
		setVisibleModal,
		handleUpdateTask,
	} = useTodoListContext();

	const handleOpenModal = (task: ITask) => {
		setTaskToEdit(task);
		setVisibleModal(true);
	};

	const {
		register,
		reset,
		handleSubmit,
		watch,
		formState: { isSubmitSuccessful },
	} = useForm<ITask>();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	useEffect(() => {
		if (taskToEdit) {
			reset({
				id: taskToEdit.id,
				taskName: taskToEdit.taskName,
			});
		}
	}, [taskToEdit]);

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
					{tasks?.map((task) => (
						<tr key={task.id}>
							<td className="">{task.taskName}</td>
							<td className="">
								<button
									onClick={(e) => handleDeleteTask(task.id)}
									className="btn btn-sm-custom btn-error"
								>
									{" "}
									<IoIosRemove size={15} />
								</button>
								<button
									onClick={(e) => handleOpenModal(task)}
									className="ml-[8px] btn btn-sm-custom btn-warning"
								>
									{" "}
									<MdModeEdit size={15} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{visibleModal && taskToEdit && (
				<dialog
					id="my_modal_1"
					className={visibleModal ? "modal modal-open" : ""}
				>
					<div className="modal-box flex flex-col">
						<form onSubmit={handleSubmit(handleUpdateTask)}>
							<input
								placeholder="Type To Do List"
								className="input w-full border-black border-1"
								{...register("taskName", {
									required: { value: true, message: "Please type taskname" },
								})}
							/>
							<div className="flex flex-row justify-end mt-[32px]">
								<button
									className="btn btn-primary mr-[8px] btn-sm-custom"
									disabled={watch("taskName") ? false : true}
									type={"submit"}
								>
									Save
								</button>
								<button
									className="btn btn-sm-custom"
									onClick={() => setVisibleModal(false)}
								>
									Close
								</button>
							</div>
						</form>
					</div>
					<form
						method="dialog"
						onSubmit={() => setVisibleModal(false)}
						className="modal-backdrop"
					>
						<button>close</button>
					</form>
				</dialog>
			)}
		</div>
	);
};

export default ToDoList;
