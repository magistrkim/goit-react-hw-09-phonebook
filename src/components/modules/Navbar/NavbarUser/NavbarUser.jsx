import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux/auth/auth-operations';
import { getUser } from '../../../../redux/auth/auth-selectors';
import css from './navbar-user.module.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import homeImg from '../../../../images/home.svg';
import contactImg from '../../../../images/contacts.svg';
import user from '../../../../images/user.svg';
import logoutIcon from '../../../../images/logoutIcon.svg';
import Button from 'components/shared/Button/Button';

const pages = [
  { name: 'Home', link: '/', private: false, img: homeImg },
  { name: 'Contacts', link: '/contacts', private: false, img: contactImg },
];

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div>
          <Link to="/" className={css.logo}>
            <img src={logo} alt="logo" className={css.img} />
            <h2 className={css.title}>CO:CO</h2>
          </Link>
        </div>
        <div className={css.navigation}>
          {pages.map(page => (
            <NavLink to={page.link} key={page.name}>
              <Button>
                {page.img && (
                  <img src={page.img} alt={page.name} className={css.btnIcon} />
                )}
                {page.name}
              </Button>
            </NavLink>
          ))}
        </div>
        <div className={css.wrapper}>
          <Button>
            {user && <img src={user} alt={name} className={css.btnIcon} />}
            {name}
          </Button>
          <button onClick={onLogout} className={css.btn}>
            <img src={logoutIcon} alt={name} className={css.btnIcon} />
            logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarUser;
