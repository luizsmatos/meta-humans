import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks/useAppContext';
import Routes from './routes/Routes';
import './styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
