import React, { useContext } from "react";
import { AgendaContext } from "../components/context/context";
import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import AppointmentForm from "../components/AppointmentForm";
import TileList from "../components/TileList";

const AppointmentsPage = () => {

  const { appointments } = useContext(AgendaContext);

  return (
    <Container className="my-5">
      <Header1 title="Appointments"/>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </Container>
  );
};

export default AppointmentsPage;
