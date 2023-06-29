import Title from '../../components/shared/Title/Title';
import LoginForm from 'components/modules/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import css from './login-page.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className={css.section}>
      <Title>sign in</Title>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
