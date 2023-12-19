export type Ticket = {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean
}
export type TicketT = {
    ticket: {
        _id: Number,
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
        createdAt: String,
    }
}