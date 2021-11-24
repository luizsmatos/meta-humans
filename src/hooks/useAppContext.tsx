/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';
import Metahumans from '../types';

interface AppContextData {
  loading: boolean;
  dataMetahumans: Metahumans[];
  setSearchTerm: (value: string) => void;
  filteredMetahumans: Metahumans[];
  open: boolean;
  isCombat: boolean;
  handleCloseDialogCombat: () => void;
  handleClickOpenDialogCombat: () => void;
  handleStartCombat: () => void;
  characters: Metahumans[];
  handleSetCharacters: (id: number) => void;
  modalCombat: boolean;
  handleModalCombatClose: () => void;
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
  const [characters, setCharacters] = useState<Metahumans[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isCombat, setIsCombat] = useState(false);
  const [modalCombat, setModalCombat] = useState(false);

  // Faz a busca de todos os personagens e salva no estado.
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

  // Faz a busca de todos os personagens filtrados.
  useEffect(() => {
    const filterMetahumans = dataMetahumans.filter((metahuman) =>
      metahuman.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMetahumans(filterMetahumans);
  }, [searchTerm]);

  // Abre o dialog de combate.
  const handleClickOpenDialogCombat = () => {
    setOpen(true);
  };

  // Fecha o dialog de combate.
  const handleCloseDialogCombat = () => {
    setOpen(false);
  };

  // Inicia o combat quando é clicado em Começar no dialog.
  const handleStartCombat = () => {
    setOpen(false);
    setIsCombat(true);
    navigate('/');
  };

  // Adiciona o personagem selecionado no combate.
  const handleSetCharacters = (id: number) => {
    try {
      if (isCombat && characters.length <= 1) {
        const getCharacter = dataMetahumans.find(
          (character) => character.id === id
        );
        const character = [...characters];
        const characterIsAlreadySelected = character.find((c) => c.id === id);

        if (characterIsAlreadySelected) {
          toast.error('Escolha um personagem diferente!');
          return;
        }

        if (getCharacter) {
          character.push(getCharacter);
        }
        setCharacters(character);
        return;
      }
      toast.error('Você deve escolher somente dois personagens!');
    } catch (err) {
      toast.error('Erro ao selecionar o personagem');
    }
  };

  // Fecha o modal de combate, resetando os personagens. Saindo do modo combate.
  const handleModalCombatClose = () => {
    setModalCombat(false);
    setIsCombat(false);
    setCharacters([]);
  };

  // Abre o modal de combate, quando 2 personagens são escolhidos.
  useEffect(() => {
    if (characters.length === 2) {
      setModalCombat(true);
    }
  }, [characters]);

  const context = {
    loading,
    setSearchTerm,
    dataMetahumans,
    filteredMetahumans,
    open,
    isCombat,
    handleCloseDialogCombat,
    handleClickOpenDialogCombat,
    handleStartCombat,
    characters,
    handleSetCharacters,
    modalCombat,
    handleModalCombatClose,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
