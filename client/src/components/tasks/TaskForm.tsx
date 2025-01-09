import { FieldErrors, UseFormRegister } from "react-hook-form"
import { TaskFormData } from "@/types/index";
import ErrorMessage from "../ErrorMessage";

type TaskFormProps = {
    errors: FieldErrors<TaskFormData>
    register: UseFormRegister<TaskFormData>
}

export default function TaskForm({errors, register} : TaskFormProps) {
    return (
        <>
            <div className="flex flex-col gap-5">
                <label
                    className="font-semibold text-xl"
                    htmlFor="name"
                >Task name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Task name..."
                    className="w-full p-3  border-gray-300 border"
                    {...register("name", {
                        required: "The task name is required",
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>

            <div className="flex flex-col gap-5">
                <label
                    className="font-semibold text-xl"
                    htmlFor="description"
                >Task description</label>
                <textarea
                    id="description"
                    placeholder="Task description..."
                    className="w-full p-3  border-gray-300 border"
                    {...register("description", {
                        required: "The task description is required"
                    })}
                />
                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}