import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'components/store/contacts/actions';
import s from "./ContactList.module.css";



const ContactList = () => {
const dispatch = useDispatch(); 
const contactList = useSelector(state => state.contacts.items);
const filter = useSelector(state => state.contacts.filter);
const filteredList = contactList.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

const onDelete = (id) => {
  dispatch(removeContact(id))
}


  return (
    <section>
      <ul>
        {filteredList.map(e => (
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

export default ContactList;


