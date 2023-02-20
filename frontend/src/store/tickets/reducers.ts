import { Reducer } from "redux";
import { AppState, TicketActionTypes, AppAction } from "./types";

const initialState: AppState = {
    tickets: [],
    loading: false,
    error: null
};

const ticketsReducer: Reducer<AppState, AppAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case TicketActionTypes.ADD_TICKET_REQUEST:
            return {
                ...state,
                loading: true
            };
        case TicketActionTypes.ADD_TICKET_SUCCESS:
            return {
                ...state
            };
        case TicketActionTypes.ADD_TICKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case TicketActionTypes.FETCH_TICKETS_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case TicketActionTypes.FETCH_TICKETS_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: action.payload
            };
        case TicketActionTypes.FETCH_TICKETS_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ticketsReducer;
