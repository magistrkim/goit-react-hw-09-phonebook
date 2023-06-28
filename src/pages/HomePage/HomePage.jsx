import HomeNonAuth from 'components/modules/Home/HomeNonAuth/HomeNonAuth';
import HomeAuth from 'components/modules/Home/HomeAuth/HomeAuth';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <HomeNonAuth />}
      {isLogin &&  <HomeAuth />}
    </>
  );
};

export default HomePage;
