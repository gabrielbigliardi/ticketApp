import TicketForm from "@/app/(components)/TicketForm";

const TicketIDPage = ({ params }: { params: { id: string } }) => {

  // console.log(params)

  return (
    <TicketForm />
  );
};

export default TicketIDPage;
