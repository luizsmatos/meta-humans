import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks/useAppContext';
import AlertCombat from './components/AlertCombat';
import Routes from './routes/Routes';
import './styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <AlertCombat />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
