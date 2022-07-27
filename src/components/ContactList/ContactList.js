import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact, removeContact} from "../../Redux/contacts-operation";
import s from "./ContactList.module.css";
import { connect } from 'react-redux';



const ContactList = () => {
const dispatch = useDispatch(); 
const contactList = useSelector(state => state.contacts.items);


const filter = useSelector(state => state.contacts.filter);

const filteredList = contactList.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

useEffect (() => {
  dispatch(fetchContact());
}, [dispatch])

const onDelete = (id) => {
  dispatch(removeContact(id))
}


  return (
    <section>
      <ul>
        {contactList && !filter && contactList.map((e => (
          <Contact
            key={e.id}
            name={e.name}
            number={e.number}
          >
            <button className={s.button} onClick = {() => onDelete(e.id)}> Delete </button>
          </Contact>)))}
        { filter && filteredList.map(e => (
          <Contact
            key={e.id}
            name={e.name}
            number={e.number}
          >
            <button className={s.button} onClick = {() => onDelete(e.id)}> Delete </button>
          </Contact>
        ))}
      </ul>
    </section>
  );
};

const mapDispachToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContact())
})

export default connect(null, mapDispachToProps)(ContactList);


