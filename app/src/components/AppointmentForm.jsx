import React from "react";
import { ContactPicker } from "./ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
        className="form-control my-3 w-25"
      />
      <input
        type="date"
        name="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="form-control my-3 w-25"
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        className="form-control my-3 w-25"
      />
      <button type="submit" className="btn btn-primary">Add Appointment</button>
    </form>
  );
};
