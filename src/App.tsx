import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks/useAppContext';
import AlertCombat from './components/AlertCombat';
import Routes from './routes/Routes';
import './styles/global.scss';
import ModalCombat from './components/ModalCombat';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <AlertCombat />
        <ModalCombat />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
