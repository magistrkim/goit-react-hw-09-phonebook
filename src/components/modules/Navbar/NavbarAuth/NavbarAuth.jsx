import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import homeImg from '../../../../images/home.svg';
import regImg from '../../../../images/register.svg';
import loginImg from '../../../../images/login.svg';
import contactImg from '../../../../images/contacts.svg';
import css from './navbar-auth.module.css';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Button from 'components/shared/Button/Button';

const pages = [
  { name: 'Home', link: '/', private: false, img: homeImg },
  { name: 'Register', link: '/register', private: false, img: regImg },
  { name: 'Login', link: '/login', private: false, img: loginImg },
  { name: 'Contacts', link: '/contacts', private: true, img: contactImg },
];

const NavbarAuth = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredPages = !isLogin ? pages.filter(page => !page.private) : pages;
  return (
    <>
      <header>
        <div className={css.container}>
          <div>
            <Link to="/" className={css.logo}>
              <img src={logo} alt="logo" className={css.img} />
              <h2 className={css.title}>CO:CO</h2>
            </Link>
          </div>
          <div className={css.navigation}>
            {filteredPages.map(page => (
              <NavLink to={page.link} key={page.name}>
                <Button>
                  {page.img && (
                    <img
                      src={page.img}
                      alt={page.name}
                      className={css.btnIcon}
                    />
                  )}
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarAuth;
