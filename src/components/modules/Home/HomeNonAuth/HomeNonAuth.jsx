import css from './home-non-auth.module.css';
import Title from 'components/shared/Title/Title';

const HomeNonAuth = () => {
  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
        <Title>May your contacts contains "CO:CO"</Title>
        </div>
      </section>
    </>
  );
};

export default HomeNonAuth;
