import PropTypes from 'prop-types';
import css from './contact-filter.module.css';

const ContactFilter = ({ handleChange, value }) => {
  return (
    <>
      <label className={css.label} htmlFor="">
        Find contacts by name
      </label>
      <input
        value={value}
        className={css.input}
        onChange={handleChange}
        placeholder="Please, type the name"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
