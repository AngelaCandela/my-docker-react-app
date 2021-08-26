import React, { useState } from "react";
import { AgendaProvider, ProductsProvider } from "./components/context/context.js"
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
  const [products, setProducts] = useState([]);

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

  const addProduct = (id, name, price) => {
    try {
      const newProduct = {
        id: id,
        name: name,
        price: price
      };
      setProducts(prev => [...prev, newProduct]);
    } catch (error) {
        console.error(error);
        alert('We could not add this product to the list.');
        return false;
    };
    return true;
  };

  return (
    <div className="d-flex flex-column justify-content-stretch">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/contacts">
            <AgendaProvider value={{contacts, setContacts, addContact, appointments, addAppointment}}>
              <ContactsPage />
            </AgendaProvider>
          </Route>
          <Route path="/appointments">
            <AgendaProvider value={{contacts, setContacts, addContact, appointments, addAppointment}}>
              <AppointmentsPage />
            </AgendaProvider>
          </Route>
          <Route exact path="/">
            <ProductsProvider value={{products, setProducts, addProduct}}>
              <Index />
            </ProductsProvider>
          </Route>
          <Route path="/create">
            <ProductsProvider value={{products, setProducts, addProduct}}>
              <Create />
            </ProductsProvider>
          </Route>
          <Route path="/edit/:productId">
            <ProductsProvider value={{products, setProducts, addProduct}}>
              <Edit />
            </ProductsProvider>
          </Route>
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
