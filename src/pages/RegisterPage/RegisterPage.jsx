import Title from '../../components/shared/Title/Title';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };
  return (
    <div>
      <Title>sign up</Title>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
