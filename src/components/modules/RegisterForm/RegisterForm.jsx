import TextInput from 'components/shared/TextField/TextField';
import useForm from '../../../hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        <form onSubmit={handleSubmit} className={css.form}>
          <TextInput
            value={name}
            handleChange={handleChange}
            {...fields.name}
          />
          <TextInput
            value={email}
            handleChange={handleChange}
            {...fields.email}
          />
          <TextInput
            value={password}
            handleChange={handleChange}
            {...fields.password}
          />
          <button className={css.btn}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
