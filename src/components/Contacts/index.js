import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet", 
      phone_number: "123123" 
    },
    {
      fullname: "Ali",
      phone_number: "543162",
    },
    {
      fullname: "Veli",
      phone_number: "7343123",
    },
  ]);

  useEffect(() => {}, [contacts]);

  return (
    <div id="container">
        <h1 className="contact-text">Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
