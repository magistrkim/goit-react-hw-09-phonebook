import css from './title.module.css';

const Title = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};

export default Title;
