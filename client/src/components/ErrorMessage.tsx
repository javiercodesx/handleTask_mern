import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p className="bg-red-600 my-4 text-gray-100 font-bold p-3 text-sm text-center">
        {children}
    </p>
  )
}