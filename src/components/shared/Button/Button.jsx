import css from './button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={css.btn}>
      {children}
    </button>
  );
};

export default Button;
