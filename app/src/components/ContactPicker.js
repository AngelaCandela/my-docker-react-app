import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select name="selectedContact" className="form-control my-3 w-25" onChange={onChange}>
      <option selected="selected">No Contact Selected</option>
      {contacts.map(contact =>
      <option key={contact} value={contact}>{contact}</option>
      )}
    </select>
  );
};
