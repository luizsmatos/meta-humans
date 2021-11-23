/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Metahumans from '../types';

interface AppContextData {
  loading: boolean;
  dataMetahumans: Metahumans[];
  setSearchTerm: (value: string) => void;
  filteredMetahumans: Metahumans[];
  open: boolean;
  isCombat: boolean;
  handleClose: () => void;
  handleClickOpen: () => void;
  handleStartCombat: () => void;
  characters: Metahumans[];
  handleSetCharacters: (id: number) => void;
}

const AppContext = createContext({} as AppContextData);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const navigate = useNavigate();
  const [dataMetahumans, setDataMetahumans] = useState<Metahumans[]>([]);
  const [filteredMetahumans, setFilteredMetahumans] =
    useState<Metahumans[]>(dataMetahumans);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isCombat, setIsCombat] = useState(false);
  const [characters, setCharacters] = useState<Metahumans[]>([]);
  const [modalCombat, setModalCombat] = useState(false);

  useEffect(() => {
    const getMetahumans = async () => {
      try {
        const response = await api.get('metahumans');
        const { data } = response;
        setFilteredMetahumans(data);
        setDataMetahumans(data);
        setLoading(false);
      } catch (err) {
        global.alert(err);
      }
    };
    getMetahumans();
  }, []);

  useEffect(() => {
    const filterMetahumans = dataMetahumans.filter((metahuman) =>
      metahuman.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMetahumans(filterMetahumans);
  }, [searchTerm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartCombat = () => {
    setOpen(false);
    setIsCombat(true);
    navigate('/');
  };

  const handleSetCharacters = (id: number) => {
    try {
      if (characters.length === 2) {
        setModalCombat(true);
      }
      if (isCombat && characters.length <= 1) {
        const getCharacter = dataMetahumans.find(
          (character) => character.id === id
        );
        const character = [...characters];
        const characterIsAlreadySelected = character.find((c) => c.id === id);

        if (characterIsAlreadySelected) {
          global.alert('Escolha um personagem diferente!');
          return;
        }

        if (getCharacter) {
          character.push(getCharacter);
        }
        setCharacters(character);
        return;
      }
      global.alert('Você pode escolher somente dois personagens!');
    } catch (err) {
      global.alert(err);
    }
  };

  const context = {
    loading,
    setSearchTerm,
    dataMetahumans,
    filteredMetahumans,
    open,
    isCombat,
    handleClose,
    handleClickOpen,
    handleStartCombat,
    characters,
    handleSetCharacters,
    modalCombat,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
