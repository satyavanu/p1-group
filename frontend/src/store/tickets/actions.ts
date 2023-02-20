
import { AppAction, Ticket, TicketActionTypes, Error } from "./types";


export const addTicketRequest = (ticket: Ticket): AppAction => ({
    type: TicketActionTypes.ADD_TICKET_REQUEST,
    payload: ticket,
});

export const addTicketSuccess = (): AppAction => ({
    type: TicketActionTypes.ADD_TICKET_SUCCESS
});

export const addTicketFailure = (error: Error): AppAction => ({
    type: TicketActionTypes.ADD_TICKET_FAILURE,
    payload: error,
});

export const fetchTicketsRequest = (): AppAction => ({
    type: TicketActionTypes.FETCH_TICKETS_DATA_REQUEST,
});

export const fetchTicketsSuccess = (tickets: Ticket[]): AppAction => ({
    type: TicketActionTypes.FETCH_TICKETS_DATA_SUCCESS,
    payload: tickets,
});

export const fetchTicketsFailure = (error: Error): AppAction => ({
    type: TicketActionTypes.FETCH_TICKETS_DATA_FAILURE,
    payload: error,
});

export const addTicket = (data: Ticket): any => {
    return async (dispatch: any) => {
        dispatch(addTicketRequest(data));
        try {
            await fetch('http://localhost:5000/tickets', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ticket: data,
                })
            }
            ).then(async response => {
                if (response.ok) {
                    dispatch(addTicketSuccess());
                } else {
                    const validationErrors = await response.text();
                    dispatch(addTicketFailure(JSON.parse(validationErrors)));
                }
            })

        } catch (error) {
            
        }
    };
};

export const fetchTickets = (): any => {
    return async (dispatch: any) => {
        dispatch(fetchTicketsRequest());
        try {
            const response = await fetch('http://localhost:5000/tickets', {
                mode: 'cors'
            });
            const res = await response.json();
            dispatch(fetchTicketsSuccess(res.data));
        } catch (e: any) {
            dispatch(fetchTicketsFailure(e));
        }
    };
};
