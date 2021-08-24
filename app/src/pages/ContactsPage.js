import React, { useState, useEffect } from "react";
import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";

const ContactsPage = ({ contacts, setContacts, addContact }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    if(contacts.length === 0) {
      fetch('/data/contacts.json')
      .then(response => {
          if(!response.ok)
              throw new Error(`Something went wrong: ${response.statusText}`);
          return response.json();
      })
      .then(response => {
          setContacts(response);
      })
      .catch(error => console.error('Error: ', error)
      );
    }
  }, []);

  const duplicateCheck = (name) => {
    let nameIsDuplicate = false;
    contacts.map(contact => {
      if(contact.name === name) {
        nameIsDuplicate = true;
        setIsDuplicate(nameIsDuplicate);
        return nameIsDuplicate;
      } else {
        return nameIsDuplicate;
      }
    });
    return nameIsDuplicate;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicateCheck(name)) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      setIsDuplicate(false);
    };
  };

  return (
    <Container className="my-5">
      <Header1 title="Contacts"/>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
          handleSubmit={handleSubmit} />
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
