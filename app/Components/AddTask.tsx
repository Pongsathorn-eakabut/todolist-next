import { IoIosAdd } from "react-icons/io";
import { useTodoListContext } from "../Context/TodoListContext";
import { useForm } from "react-hook-form";
import { ITask } from "@/types/task";
import { useEffect } from "react";

const AddTask = () => {
	const { handleAddTask } = useTodoListContext();
	const {
		handleSubmit,
		register,
		watch,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm<ITask>();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<form onSubmit={handleSubmit(handleAddTask)}>
			<div className="flex justify-center items-center w-full flex-row pt-[16px]">
				<input
					placeholder="Type To Do List"
					className="input w-full max-w-xs border-black border-1"
					{...register("taskName", {
						required: { value: true, message: "Please type taskname" },
					})}
				/>
				<button
					className="ml-[8px] btn btn-success btn-sm-custom"
					type="submit"
					disabled={watch("taskName") ? false : true}
				>
					<IoIosAdd size={15} /> Add Task
				</button>
			</div>
		</form>
	);
};

export default AddTask;
