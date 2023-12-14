import Link from "next/link";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div>Dashboard</div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
      <Link href={"/TicketPage"}>Tickets</Link>
    </div>
  );
};

export default Dashboard;
