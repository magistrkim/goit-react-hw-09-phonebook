import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import Navbar from './components/modules/Navbar/Navbar';
import AuthLayout from 'components/modules/AuthLayout/AuthLayout';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <UserRoutes />
            </div>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
