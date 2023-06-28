import css from './home-non-auth.module.css';
import Title from 'components/shared/Title/Title';

const HomeNonAuth = () => {
  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
          <Title>
            May "CO:CO" <span className={css.span}>co</span>ntains your{' '}
            <span className={css.span}>co</span>ntacts
          </Title>
        </div>
      </section>
    </>
  );
};

export default HomeNonAuth;
