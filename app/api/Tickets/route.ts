import Ticket from "@/app/(models)/Ticket";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";


export async function POST(req: any) {
    console.log("RANDOM")
    try {
        console.log(req)
        const body = await req.json()
        console.log(body)
        const ticketData = body.formData
        await Ticket.create(ticketData)
        return NextResponse.json({ message: "Ticket Created" }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}


export async function GET() {
    try {
        const tickets = await Ticket.find()
        // console.log(tickets)
        return NextResponse.json({ message: tickets }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}


// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//     console.log("HANDLER")
//     if (req.method === 'POST') {
//         try {

//             const data: TicketData = req.body;
//             console.log(data)

//             // Faça o que precisa com os dados (por exemplo, salvar no banco de dados)

//             res.status(200).json({ success: true, message: 'Ticket criado com sucesso' });
//         } catch (error) {
//             console.error('Erro ao processar a solicitação:', error);
//             res.status(500).json({ success: false, message: 'Erro interno do servidor' });
//         }
//     } else {
//         res.status(405).json({ success: false, message: 'Método não permitido' });
//     }
// }



