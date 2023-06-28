import css from './home-auth.module.css';
import Title from 'components/shared/Title/Title';

const HomeAuth = () => {
  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
        <Title>Welcome to CO:CO app</Title>
        </div>
      </section>
    </>
  );
};

export default HomeAuth;
