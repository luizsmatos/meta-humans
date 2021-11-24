import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './hooks/useAppContext';
import Routes from './routes/Routes';
import AlertCombat from './components/AlertCombat';
import ModalCombat from './components/ModalCombat';

import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <AlertCombat />
        <ModalCombat />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
