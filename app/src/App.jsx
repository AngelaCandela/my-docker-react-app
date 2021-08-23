import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ContactsPage from './pages/ContactsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Create from './pages/Create';
import Edit from './pages/Edit';
import TablePage from './pages/TablePage';
import TodoList from './pages/TodoList';
import Error from './pages/Error';
import Footer from "./components/Footer";

import "./css/style.css"

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments(prev => [newAppointment, ...prev]);
  };

  return (
    <div className="d-flex flex-column justify-content-stretch">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/contacts">
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path="/appointments">
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
          <Route exact path="/" component={Index} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:productID" component={Edit} />
          <Route path="/table" component={TablePage} />
          <Route path="/todos" component={TodoList} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
};

export default App;
