import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import Navbar from './components/modules/Navbar/Navbar';
import AuthLayout from 'components/modules/AuthLayout/AuthLayout';
import Footer from 'components/modules/Footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            {/* basename="/goit-react-hw-09-phonebook" */}
            <div className="App">
              <Navbar />
              <UserRoutes />
              <Footer />
            </div>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
