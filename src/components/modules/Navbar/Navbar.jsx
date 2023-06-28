import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </>
  );
};
export default Navbar;
