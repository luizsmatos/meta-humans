import { useAppContext } from './hooks/useAppContext';

const App = () => {
  const { dataMetahumans } = useAppContext();
  return <h1 className="App">Olá, mundo!</h1>;
};

export default App;
