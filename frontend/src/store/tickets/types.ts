export interface AppState {
    tickets: Ticket[];
    loading: boolean;
    error: Error | null;
}

export interface Ticket {
    id?: number;
    email: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    supplier: string;
}

export interface Error {
    message: string;
    valid: boolean;
}

export enum TicketActionTypes {
    ADD_TICKET_REQUEST = "ADD_TICKET_REQUEST",
    ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS",
    ADD_TICKET_FAILURE = "ADD_TICKET_FAILURE",
    FETCH_TICKETS_DATA_REQUEST = "FETCH_TICKETS_DATA_REQUEST",
    FETCH_TICKETS_DATA_SUCCESS = "FETCH_TICKETS_DATA_SUCCESS",
    FETCH_TICKETS_DATA_FAILURE = "FETCH_TICKETS_DATA_FAILURE",
}

export interface AddTicketAction {
    type: TicketActionTypes.ADD_TICKET_REQUEST;
    payload: Ticket;
}

export interface AddTicketActionSuccess {
    type: TicketActionTypes.ADD_TICKET_SUCCESS;
}

export interface AddTicketActionFailure {
    type: TicketActionTypes.ADD_TICKET_FAILURE;
    payload: Error;
}

export interface AddTicketAction {
    type: TicketActionTypes.ADD_TICKET_REQUEST;
    payload: Ticket;
}

export interface FetchTicketsDataRequestAction {
    type: TicketActionTypes.FETCH_TICKETS_DATA_REQUEST;
}

export interface FetchTicketsDataSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_DATA_SUCCESS;
    payload: Ticket[];
}

export interface FetchTicketsDataFailureAction {
    type: TicketActionTypes.FETCH_TICKETS_DATA_FAILURE;
    payload: Error;
}

export type AppAction =
    | AddTicketAction
    | AddTicketActionSuccess
    | AddTicketActionFailure
    | FetchTicketsDataRequestAction
    | FetchTicketsDataSuccessAction
    | FetchTicketsDataFailureAction;
