import React, { useState, useContext } from "react";
import { AgendaContext } from "./context/context";

const ContactForm = () => {

  const { contacts, addContact } = useContext(AgendaContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Contact Name"
        className="form-control my-3 w-25"
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        pattern="^(([0-9]{2,4})([-\s\/]{0,1})([0-9]{4,8}))?$"
        placeholder="Contact Phone"
        className="form-control my-3 w-25"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Contact Email"
        className="form-control my-3 w-25"
      />
      <button type="submit" className="btn btn-primary">Add Contact</button>
      {isDuplicate && <p>This contact already exists</p>}
    </form>
  );
};

export default ContactForm;
