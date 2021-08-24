import React, { useEffect, useState } from "react";
import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import { ContactForm } from "../components/ContactForm";
import { TileList } from "../components/TileList";

export const ContactsPage = () => {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    fetch("/data/contacts.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => {
        console.error('There was an error:', error);
      });
  }, []);

  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const duplicateCheck = (name) => {
    let nameIsDuplicate = false;
    contacts.map(contact => {
      if (contact.name === name) {
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
    if (!duplicateCheck(name)) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      setIsDuplicate(false);
    };
  };

  return (
    <Container className="my-5">
      <Header1 title="Contacts" />
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
