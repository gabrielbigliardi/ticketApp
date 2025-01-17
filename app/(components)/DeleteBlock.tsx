'use client'

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function DeleteBlock({ id }: any) {

  // console.log(id)
  const router = useRouter()

  const deleteTicket = async () => {
    console.log(`to delete ${id}`)
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    })
    if (res.ok) {
      console.log("refreshing")
      router.refresh()
    }
  }

  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  )
}
