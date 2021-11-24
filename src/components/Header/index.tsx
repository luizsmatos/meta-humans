import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logoImage from '../../assets/images/logoMeta.png';
import './styles.scss';
import { useAppContext } from '../../hooks/useAppContext';

interface HeaderProps {
  isSearch: boolean;
}

const Header = ({ isSearch }: HeaderProps) => {
  const { handleClickOpenDialogCombat } = useAppContext();
  return (
    <header className="header">
      <div>
        <img src={logoImage} alt="logo" />
        <nav>
          <Link to="/">Home</Link>
          <button type="button" onClick={handleClickOpenDialogCombat}>
            Combate
          </button>
        </nav>
      </div>
      {!!isSearch && <SearchBar />}
    </header>
  );
};

export default Header;
