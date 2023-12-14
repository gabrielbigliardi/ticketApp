const TicketIDPage = ({ params }: { params: { id: string } }) => {

  console.log(params)

  return <div>TicketIDPage {params.id}</div>;
};

export default TicketIDPage;
