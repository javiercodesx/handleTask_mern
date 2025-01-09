import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify'
import ProjectForm from "@/components/projects/ProjectForm";
import { ProjectFormData } from "@/types/index";
import { createProject } from "@/api/ProjectApi";

export default function CreateProjectPage() {

  const navigate = useNavigate()

  const initialValues : ProjectFormData = {
    projectName: "",
    clientName: "",
    description: ""
  }
  
  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})
  
  const mutation = useMutation({
    mutationFn: createProject,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/')
    }
  })

  const handleForm = async (formData : ProjectFormData) => {
    await mutation.mutate(formData)
  }

  return (
    <>
        <h1 className="text-4xl font-black">Create project</h1>
      
        <nav className="my-8 flex items-center justify-between">
          <p className="text-xl font-light text-gray-500">Fill the form to create a project</p>

          <Link
            className="bg-gray-950 text-gray-300 border border-gray-300 hover:text-white px-4 py-2 font-semibold cursor-pointer transition-colors"
            to='/'
          >Back to projects</Link>
        </nav>

        <form
          className=" mt-10 bg-white shadow-md p-10 rounded-md"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm
            register={register}
            errors={errors}
          />

          <input 
            type="submit" 
            value="Create project"
            className="
            bg-gray-950 text-gray-300 hover:text-white uppercase px-4 py-2 font-semibold cursor-pointer transition-colors
            w-full p-3"
          />
        </form>
    </>
  )
}
