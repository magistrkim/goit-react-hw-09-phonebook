import TextInput from 'components/shared/TextField/TextField';
import useForm from '../../../hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './register-form.module.css';
import Button from 'components/shared/Button/Button';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <TextInput value={name}
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
        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterForm;
