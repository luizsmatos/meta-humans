import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logoImage from '../../assets/images/logoMeta.png';
import './styles.scss';

interface HeaderProps {
  isSearch: boolean;
}

const Header = ({ isSearch }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <img src={logoImage} alt="logo" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/combat">Combate</Link>
        </nav>
      </div>
      {!!isSearch && <SearchBar />}
    </header>
  );
};

export default Header;
