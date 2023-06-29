import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/modules/Loader/Loader';
import PrivateRoute from 'components/modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/modules/PublicRoute/PublicRoute';
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
