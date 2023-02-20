import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import TicketsList from "./pages/TicketsList";
import AddTicketPage from "./pages/AddTicketPage";
import Layout from "./layouts/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<AddTicketPage/>} />
          <Route path="list" element={<TicketsList/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
