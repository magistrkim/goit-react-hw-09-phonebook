import PropTypes from 'prop-types';
import css from './contact-list.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const contactItems = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button
        onClick={() => {
          removeContact(id);
        }}
        className={css.item__btn}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{contactItems}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
