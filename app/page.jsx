import Link from "next/link";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-store"
    })

    console.log("getting data")
    // console.log(res)
    return res.json()
  } catch (error) {
    console.log("Failed to get tickets", error)
  }
}

const Dashboard = async () => {


  const { message } = await getTickets()

  const uniqueCategories = [
    ...new Set(message?.map(({ category }) => category))
  ]

  return (
    <div className="p-5">
      <div>
        {message && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          < div key={categoryIndex} className="mb-4" >
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {message
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard key={_index} id={_index} ticket={filteredTicket} />
                ))
              }

            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Dashboard;
