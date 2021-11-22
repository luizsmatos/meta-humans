/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import Metahumans from '../types';

interface AppContextData {
  loading: boolean;
  dataMetahumans: Metahumans[];
}

const AppContext = createContext({} as AppContextData);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [dataMetahumans, setDataMetahumans] = useState<Metahumans[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMetahumans = async () => {
      try {
        const response = await api.get('metahumans');
        const { data } = response;
        setDataMetahumans(data);
        setLoading(false);
      } catch (err) {
        global.alert(err);
      }
    };
    getMetahumans();
  }, []);

  const context = {
    dataMetahumans,
    loading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
