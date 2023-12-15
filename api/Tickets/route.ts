import Ticket from "@/app/(models)/Ticket";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";

type TicketData = {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("HANDLER")
    if (req.method === 'POST') {
        try {

            const data: TicketData = req.body;
            console.log(data)

            // Faça o que precisa com os dados (por exemplo, salvar no banco de dados)

            res.status(200).json({ success: true, message: 'Ticket criado com sucesso' });
        } catch (error) {
            console.error('Erro ao processar a solicitação:', error);
            res.status(500).json({ success: false, message: 'Erro interno do servidor' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método não permitido' });
    }
}




// export default async function POST(req: any, res: any) {
//     console.log("RANDOM")
//     try {
//         const body = await req.json()
//         const ticketData = body.formData
//         await Ticket.create(ticketData)
//         return NextResponse.json({ message: "Ticket Created" }, { status: 201 })
//     } catch (err) {
//         return NextResponse.json({ message: "Error", err }, { status: 500 })
//     }


// }