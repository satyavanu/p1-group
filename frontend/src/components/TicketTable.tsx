import React from 'react';
import { Ticket } from '../store/tickets/types';

type Props = {
    data: Ticket[]
}

const TicketTableData: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.map((ticket: Ticket, i: number) =>
            (
                <div className="table-row ticket-data" key={i}>
                    <div>{ticket.title}</div>
                    <div>{ticket.description}</div>
                    <div>{ticket.price}</div>
                    <div>{ticket.amount}</div>
                    <div>{ticket.supplier}</div>
                    <div>{ticket.email}</div>
                </div>
            )

            )}
        </>
    )
}

export default TicketTableData;