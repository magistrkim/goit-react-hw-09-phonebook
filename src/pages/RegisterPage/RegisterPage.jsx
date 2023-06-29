import Title from '../../components/shared/Title/Title';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import css from './register-page.module.css'
import { signup } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };
  return (
    <div className={css.section}>
      <Title>sign up</Title>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
