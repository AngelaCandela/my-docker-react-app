import React, { useState } from "react";
import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import AppointmentForm from "../components/AppointmentForm";
import TileList from "../components/TileList";
import contacts from "../data/contacts.json";

const AppointmentsPage = () => {

  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments(prev => [newAppointment, ...prev]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <Container className="my-5">
      <Header1 title="Appointments"/>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          />
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
