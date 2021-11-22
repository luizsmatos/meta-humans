import { BrowserRouter } from 'react-router-dom';
import { AppProvider, useAppContext } from './hooks/useAppContext';
import Routes from './routes/Routes';
import GlobalStyles from './styles/global';

const App = () => {
  const { dataMetahumans } = useAppContext();
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
