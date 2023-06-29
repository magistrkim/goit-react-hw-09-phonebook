import css from './footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <ul className={css.list}>
        <li className={css.item}>
          <a
            href="https://github.com/magistrkim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
            className={css.link}
          >
            Github
          </a>
        </li>
        <li className={css.item}>
          <a
            href="https://www.linkedin.com/in/nataliya-kachor/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedIn link"
            className={css.link}
          >
            LinkedIn
          </a>
        </li>
        <li className={css.item}>
          <a
            href="tel:+380976686033"
            aria-label="phone number"
            className={css.link}
          >
            +380976686033
          </a>
        </li>
      </ul>
      <p className={css.text}>
        All rights reserved. &copy;{' '}
        <a
          href="http://magistrkim.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kim web site link"
        >
          <span className={css.myLogo}>NataliyaKim</span>
        </a>{' '}
        with{' '}
        <a
          href="https://goit.global/ua/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Goit link"
        >
          <span className={css.logo}>Go</span>
          <span className={css.logo__text}>IT</span> 2023
        </a>
      </p>
    </footer>
  );
};

export default Footer;
