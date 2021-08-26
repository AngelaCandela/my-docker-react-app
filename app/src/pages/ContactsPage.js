import React, { useEffect, useContext, useCallback } from "react";
import { AgendaContext } from "../components/context/context";
import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";

const ContactsPage = () => {

  const { contacts, setContacts } = useContext(AgendaContext);

  useEffect(() => {
    if(contacts.length === 0) {
      fetch('/data/contacts.json')
      .then(response => {
          if(!response.ok)
              throw new Error(`Something went wrong: ${response.statusText}`);
          return response.json();
      })
      .then(response => {
          updateContacts(response);
      })
      .catch(error => console.error('Error: ', error)
      );
    }
  }, [contacts]);

  const updateContacts = useCallback((response) => {
    setContacts(response)
  }, []);

  return (
    <Container className="my-5">
      <Header1 title="Contacts"/>
      <section>
        <h2>Add Contact</h2>
        <ContactForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </Container>
  );
};

export default ContactsPage;
