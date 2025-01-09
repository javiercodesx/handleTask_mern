import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectApi"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"

export default function ProjectDetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    if(isLoading) return <h2 className="text-red-500 text-2xl text-center">Loading...</h2>
    if(isError) return <Navigate to='/404'/>
    
    if(data) return (
      <>
        <h1 className="text-4xl font-black">{data.projectName}</h1>
        <p className="text-xl font-light mt-5">{data.description}</p>

        <nav className="my-5 flex gap-3">
          <button
            type="button"
            className="bg-gray-950 hover:bg-gray-800 px-10 py-2 text-gray-100 font-bold cursor-pointer transition-colors"
            onClick={() => navigate('?newTask=true')}
          >
            Add Task
          </button>
        </nav>

        <TaskList
          tasks={data.tasks}
        />
        <AddTaskModal />
        <EditTaskData />
        <TaskModalDetails />
      </>
    )
}
