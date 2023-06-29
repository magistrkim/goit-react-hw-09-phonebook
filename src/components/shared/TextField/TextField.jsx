import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import css from './text-field.module.css';

const TextInput = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={css.wrapper}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <input id={id} onChange={handleChange} {...props} className={css.input} />
    </div>
  );
};

export default TextInput;
