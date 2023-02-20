import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../store/tickets/types";
import { fetchTickets } from "../store/tickets/actions";

import TicketTableHeader from "../components/TicketTableHeader";
import TicketTableData from "../components/TicketTable";

const TicketsList: React.FC = () => {
  const data = ['Title', 'Description', 'Price', 'Amount', 'Supplier', 'Email']
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(fetchTickets());
    document.title = "P1Group: Tickets List"
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Ticket List</h2>
      <div className="table-container">
        <TicketTableHeader headings={data} />
        <TicketTableData data={tickets} />
      </div>
    </>
  );
};

export default TicketsList;
