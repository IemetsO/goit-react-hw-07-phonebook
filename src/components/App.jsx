import React from 'react';
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter"
import Form from "../components/Form/form"


const App = () => {

return (
  <div>
    <h1>Phonebook</h1>
    <Form></Form>
    <h2>Contacts</h2>
    <Filter></Filter>
    <ContactList></ContactList>
   </div>
);

}

export default App