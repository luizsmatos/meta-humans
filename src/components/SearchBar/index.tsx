import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { useAppContext } from '../../hooks/useAppContext';

const SearchBar = () => {
  const { setSearchTerm } = useAppContext();
  return (
    <FormControl
      sx={{
        m: 1,
        width: '600px',
        background: '#fff',
        borderRadius: '10px 10px 0 0',
      }}
      variant="filled"
      className="search"
    >
      <InputLabel htmlFor="outlined-adornment-search">Pesquisar</InputLabel>
      <FilledInput
        placeholder="Digite seu personagem"
        id="outlined-adornment-search"
        sx={{ width: '100%', borderRadius: '10px' }}
        onChange={(e) => setSearchTerm(e.target.value)}
        endAdornment={
          <InputAdornment position="end" sx={{ padding: '10px' }}>
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
