import Title from '../../components/shared/Title/Title';
import LoginForm from 'components/modules/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  return (
    <div>
      <Title>sign in</Title>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
