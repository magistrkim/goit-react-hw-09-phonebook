import css from './home-auth.module.css';
import Title from 'components/shared/Title/Title';
import { useSelector} from 'react-redux';
import { getUser } from '../../../../redux/auth/auth-selectors';

const HomeAuth = () => {
  const { name } = useSelector(getUser);
  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
          <Title><span className={css.span}>{name},</span> Welcome to CO:CO app</Title>
        </div>
      </section>
    </>
  );
};

export default HomeAuth;
