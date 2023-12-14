import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
  return (
    <div 
        className="flex flex-col bg-card hover:bg-card-hover rounded-md 
        shadow-lg p-3 m-2"
    >
        <div className="flex mb-3">
            <PriorityDisplay />
            <div className="ml-auto">
                <DeleteBlock />
            </div>
        </div>
        <h4>TICKET TITLE</h4>
        <hr className="h-px border-0 bg-page mb-2"/>
        <p className="whitespace-pre-wrap">this is the ticket description! Please do it!</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
            <div className="flex flex-col">
                <p className="text-xs my-1">14/12/2023 19:19</p>
                <ProgressDisplay />
            </div>
            <div className="ml-auto flex items-end">
                <StatusDisplay />
            </div>
        </div>
    </div>
  )
}
