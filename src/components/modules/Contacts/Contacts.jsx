import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  fetchAddContact,
  fetchRemoveContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';
import css from './contacts.module.css';

const Contacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleRemoveContact = id => {
    dispatch(fetchRemoveContact(id));

    return Notify.info(`The contact has been removed from the contact list!`);
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <ContactForm onSubmit={handleAddContact} />
        </div>
        <div className={css.wrapper}>
          <div className={css.block}>
            <ContactFilter value={filter} handleChange={handleFilter} />
            <ContactList
              removeContact={handleRemoveContact}
              contacts={filteredContacts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
