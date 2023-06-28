import TextInput from 'components/shared/TextField/TextField';
import useForm from '../../../hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <div className={css.wrapper}>
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
        <button className={css.btn}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
