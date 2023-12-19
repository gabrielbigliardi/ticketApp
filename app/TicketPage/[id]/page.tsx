import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id: any) => {

  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed to get Ticket")
  }

  return res.json()

}

const TicketIDPage = async ({ params }: { params: { id: string } }) => {

  // console.log(params)

  const EDITMOD = params.id === "new" ? false : true
  let updateTicketData: any = {}

  if (EDITMOD) {
    updateTicketData = await getTicketById(params.id)
    updateTicketData = updateTicketData.foundTicket

  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <TicketForm ticket={updateTicketData} />
  );
};

export default TicketIDPage;
