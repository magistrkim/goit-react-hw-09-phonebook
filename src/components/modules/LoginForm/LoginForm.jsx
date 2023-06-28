import TextInput from 'components/shared/TextField/TextField';
import useForm from '../../../hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from '../RegisterForm/register-form.module.css';
import Button from 'components/shared/Button/Button';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
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
        <Button>Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
